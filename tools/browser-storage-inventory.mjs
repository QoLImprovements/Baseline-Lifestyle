import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_ROOT = path.resolve(HERE, "..");
const PRODUCTION_PATHS = Object.freeze(["index.html", "index", "sitewide", "systems"]);
const INCLUDED_EXTENSIONS = new Set([".js", ".mjs", ".html", ".php"]);
const EXCLUDED_DIRECTORIES = new Set([
  ".git",
  ".github",
  ".cache",
  ".venv",
  "node_modules",
  "vendor",
  "dist",
  "build",
  "coverage",
  "tests",
  "test-results",
  "playwright-report",
  "prototypes",
  "docs",
]);

const REVIEWED_DEVICE_PREFERENCES = Object.freeze({
  "systems/baseline-recreation/js/games-music.js": new Set(["baseline.games.music.v1"]),
});

function isReviewedDevicePreference(relativePath, owner, resolvedPattern) {
  const allowed = REVIEWED_DEVICE_PREFERENCES[relativePath];
  return owner === "localStorage" && Boolean(allowed && resolvedPattern && allowed.has(resolvedPattern));
}

function lineNumber(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function walk(directory, root, output = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!entry.name.startsWith(".") && !EXCLUDED_DIRECTORIES.has(entry.name)) {
        walk(path.join(directory, entry.name), root, output);
      }
      continue;
    }
    if (!entry.isFile() || !INCLUDED_EXTENSIONS.has(path.extname(entry.name))) continue;
    output.push(path.relative(root, path.join(directory, entry.name)).replaceAll("\\", "/"));
  }
  return output;
}

function productionFiles(root) {
  const output = [];
  for (const relative of PRODUCTION_PATHS) {
    const target = path.join(root, relative);
    if (!fs.existsSync(target)) continue;
    const stat = fs.statSync(target);
    if (stat.isDirectory()) walk(target, root, output);
    else if (stat.isFile() && INCLUDED_EXTENSIONS.has(path.extname(target))) {
      output.push(relative.replaceAll("\\", "/"));
    }
  }
  return [...new Set(output)].sort();
}

function decodeLiteral(expression) {
  const value = String(expression || "").trim();
  const quote = value[0];
  if (!["'", '"', "`"].includes(quote) || value.at(-1) !== quote) return null;
  const body = value.slice(1, -1);
  if (quote === "`" && body.includes("${")) {
    return body.replace(/\$\{[^}]+\}/g, "{dynamic}");
  }
  try {
    if (quote === '"') return JSON.parse(value);
    return body
      .replace(/\\'/g, "'")
      .replace(/\\`/g, "`")
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\\\/g, "\\");
  } catch {
    return body;
  }
}

function collectConstants(source) {
  const candidates = new Map();
  const expression = /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*((?:'[^'\n]*')|(?:"[^"\n]*")|(?:`[^`\n]*`))/g;
  for (const match of source.matchAll(expression)) {
    const decoded = decodeLiteral(match[2]);
    if (decoded === null) continue;
    if (!candidates.has(match[1])) candidates.set(match[1], new Set());
    candidates.get(match[1]).add(decoded);
  }
  const constants = new Map();
  for (const [name, values] of candidates) {
    if (values.size === 1) constants.set(name, values.values().next().value);
  }
  return constants;
}

function resolveExpression(expression, constants) {
  const compact = String(expression || "").trim().replace(/\s+/g, " ");
  const literal = decodeLiteral(compact);
  if (literal !== null) return literal;
  if (constants.has(compact)) return constants.get(compact);

  const storageKey = /^storageKey\(\s*([A-Za-z_$][\w$]*)\s*,/.exec(compact);
  if (storageKey && constants.has(storageKey[1])) {
    return `${constants.get(storageKey[1])}::{dynamic}`;
  }

  const concatenation = /^([A-Za-z_$][\w$]*)\s*\+/.exec(compact);
  if (concatenation && constants.has(concatenation[1])) {
    return `${constants.get(concatenation[1])}{dynamic}`;
  }

  return null;
}

function classify(operation, owner) {
  if (owner === "sessionStorage") return "session";
  if (["removeItem", "del", "removeStorage"].includes(operation)) return "delete";
  if (["setItem", "write", "writeStorage"].includes(operation)) return "write";
  return "read";
}

function scanFile(root, relativePath) {
  const absolutePath = path.join(root, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const constants = collectConstants(source);
  const occurrences = [];

  const patterns = [
    {
      owner: "localStorage",
      regex: /\b(?:global\.)?localStorage\s*\??\.\s*(getItem|setItem|removeItem)\s*\(\s*([^,\n\)]+)/g,
    },
    {
      owner: "sessionStorage",
      regex: /\b(?:global\.)?sessionStorage\s*\??\.\s*(getItem|setItem|removeItem)\s*\(\s*([^,\n\)]+)/g,
    },
    {
      owner: "BASELINE_store",
      regex: /\b(?:global\.)?(?:BASELINE_store|STORE)\s*\??\.\s*(read|write|del)\s*\(\s*([^,\n\)]+)/g,
    },
    {
      owner: "storage-wrapper",
      regex: /\b(readStorage|writeStorage|removeStorage)\s*\(\s*([^,\n\)]+)/g,
    },
  ];

  for (const { owner, regex } of patterns) {
    for (const match of source.matchAll(regex)) {
      const operation = match[1];
      const expression = match[2].trim();
      const resolvedPattern = resolveExpression(expression, constants);
      occurrences.push({
        file: relativePath,
        line: lineNumber(source, match.index || 0),
        owner,
        operation,
        access: classify(operation, owner),
        expression,
        resolvedPattern,
        reviewedDevicePreference: isReviewedDevicePreference(relativePath, owner, resolvedPattern),
      });
    }
  }

  return occurrences;
}

export function collectBrowserStorageInventory(root = DEFAULT_ROOT) {
  const files = productionFiles(root);
  const occurrences = files.flatMap((relativePath) => scanFile(root, relativePath));
  occurrences.sort((left, right) =>
    left.file.localeCompare(right.file) || left.line - right.line || left.operation.localeCompare(right.operation),
  );

  const groups = new Map();
  for (const occurrence of occurrences) {
    const key = occurrence.resolvedPattern || `[expression] ${occurrence.expression}`;
    const group = groups.get(key) || {
      pattern: key,
      resolved: Boolean(occurrence.resolvedPattern),
      reviewedDevicePreference: true,
      accesses: new Set(),
      owners: new Set(),
      occurrences: [],
    };
    group.reviewedDevicePreference = group.reviewedDevicePreference && occurrence.reviewedDevicePreference;
    group.accesses.add(occurrence.access);
    group.owners.add(occurrence.owner);
    group.occurrences.push({
      file: occurrence.file,
      line: occurrence.line,
      operation: occurrence.operation,
      expression: occurrence.expression,
    });
    groups.set(key, group);
  }

  const normalizedGroups = [...groups.values()]
    .map((group) => ({
      pattern: group.pattern,
      resolved: group.resolved,
      reviewedDevicePreference: Boolean(group.reviewedDevicePreference),
      accesses: [...group.accesses].sort(),
      owners: [...group.owners].sort(),
      occurrences: group.occurrences,
    }))
    .sort((left, right) => left.pattern.localeCompare(right.pattern));

  const reviewedDeviceOccurrences = occurrences.filter((item) => item.reviewedDevicePreference);
  const unreviewedOccurrences = occurrences.filter((item) => !item.reviewedDevicePreference);

  return {
    formatVersion: 2,
    productionPaths: [...PRODUCTION_PATHS],
    scannedFiles: files.length,
    occurrenceCount: occurrences.length,
    reviewedDeviceOccurrenceCount: reviewedDeviceOccurrences.length,
    unreviewedOccurrenceCount: unreviewedOccurrences.length,
    groups: normalizedGroups,
    reviewedGroups: normalizedGroups.filter((group) => group.reviewedDevicePreference),
    unreviewedGroups: normalizedGroups.filter((group) => !group.reviewedDevicePreference),
  };
}

function printMarkdown(inventory) {
  console.log("# Browser storage inventory\n");
  console.log(`Scanned files: ${inventory.scannedFiles}  `);
  console.log(`Storage occurrences: ${inventory.occurrenceCount}\n`);
  console.log("| Pattern/expression | Access | Source |\n|---|---|---|");
  for (const group of inventory.groups) {
    const source = group.occurrences
      .map((item) => `${item.file}:${item.line}`)
      .join("<br>");
    console.log(`| \`${group.pattern.replaceAll("|", "\\|")}\` | ${group.accesses.join(", ")} | ${source} |`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const inventory = collectBrowserStorageInventory(
    process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : DEFAULT_ROOT,
  );
  if (process.argv.includes("--markdown")) printMarkdown(inventory);
  else console.log(JSON.stringify(inventory, null, 2));
}
