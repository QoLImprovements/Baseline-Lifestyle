import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT
  ? path.resolve(process.env.BASELINE_REPO_ROOT)
  : path.resolve(here, "..");
const source = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/baseline-badminton-session.js"),
  "utf8",
);
const htmlSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/baseline-badminton-session.html"),
  "utf8",
);
const ratingsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-ratings.js"),
  "utf8",
);
const rendererSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-court-renderer.js"),
  "utf8",
);
const restrictionsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-restrictions.js"),
  "utf8",
);
const hardshipsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-hardships.js"),
  "utf8",
);
const hydrationSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-state-hydration.js"),
  "utf8",
);
const matchmakerSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-matchmaker.js"),
  "utf8",
);
const ruleAdminSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-rule-admin.js"),
  "utf8",
);
const reportingSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-reporting.js"),
  "utf8",
);
const courtCardsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-court-cards.js"),
  "utf8",
);
const rosterSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-roster.js"),
  "utf8",
);
const gamePlanSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-game-plan.js"),
  "utf8",
);
const resultsSource = fs.readFileSync(
  path.join(root, "systems/baseline-badminton-session/js/badminton-session-results.js"),
  "utf8",
);

test("Badminton Session controller remains syntactically valid JavaScript", () => {
  assert.doesNotThrow(() => new Function(source));
});

test("rotation state distinguishes participation, partnerships, opponents and 2v1 solo assignments", () => {
  for (const field of [
    "sessionPlayCounts",
    "sessionPairCounts",
    "sessionOpponentCounts",
    "sessionSolo2v1Counts",
  ]) {
    assert.match(source, new RegExp(field + ": \\{\\}"));
  }
  assert.match(matchmakerSource, /function updateRotationMemoryFromCourt\(court\)/);
});

test("circumstantial bench choice considers both sit-out count and games played", () => {
  assert.match(matchmakerSource, /function chooseSitOutPlayers\(attendingPlayers, benchCount\)/);
  assert.match(matchmakerSource, /getSitOutCount\(a\.id\)/);
  assert.match(matchmakerSource, /getSessionPlayCount\(b\.id\) - getSessionPlayCount\(a\.id\)/);
  assert.match(matchmakerSource, /lastSitOutPlayerIds/);
});

test("generator exploration is deterministic rather than Math.random driven", () => {
  const layoutStart = matchmakerSource.indexOf("function choosePreferredLayout");
  const candidateEnd = matchmakerSource.indexOf("function buildSinglesDayCourtSet", layoutStart);
  const generatorSlice = matchmakerSource.slice(layoutStart, candidateEnd);
  assert.doesNotMatch(generatorSlice, /Math\.random/);
  assert.match(generatorSlice, /orderPlayersForGeneration/);
  assert.match(matchmakerSource, /function stableGenerationHash\(value\)/);
});

test("candidate quality penalises recent repeated partners, opponents and solo 2v1 roles", () => {
  assert.match(matchmakerSource, /function getCourtRotationPenalty\(court\)/);
  assert.match(matchmakerSource, /sessionPairCounts/);
  assert.match(matchmakerSource, /sessionOpponentCounts/);
  assert.match(matchmakerSource, /sessionSolo2v1Counts/);
  assert.match(source, /score -= getCourtRotationPenalty\(court\)/);
});

test("main current-set generation actually uses the scored candidate path", () => {
  const start = matchmakerSource.indexOf("function buildCurrentCourtSet");
  const end = matchmakerSource.indexOf("function updateRotationMemoryFromCourt", start);
  const currentSetSource = matchmakerSource.slice(start, end);
  assert.match(currentSetSource, /generateNovelCourtSet\(attendingPlayers, normalizedFormat, usedSet, courtLimit\)/);
  assert.match(currentSetSource, /buildSpecialFourPlayerSequence/);
});

test("matchup scoring remains internal and is not exposed as a viewer-facing explanation", () => {
  assert.match(matchmakerSource, /court\.matchupReason = reasons\.join\(' '\)/);
  assert.doesNotMatch(courtCardsSource, /Why this matchup\?/);
  assert.doesNotMatch(courtCardsSource, /court-matchup-reason/);
});

test("Players & Pairs exposes Pair-ID statistics", () => {
  assert.match(rosterSource, /function normalizePairSummaryKeys\(\)/);
  assert.match(rosterSource, /Games together/);
  assert.match(rosterSource, /W-L/);
  assert.match(rosterSource, /Last played/);
  assert.match(rosterSource, /getPairLabelFromId/);
});

test("history exposes session summary metrics and stable match identities", () => {
  assert.match(source, /side1PlayerIds:/);
  assert.match(source, /side2PlayerIds:/);
  assert.match(source, /side1PairId:/);
  assert.match(source, /side2PairId:/);
  assert.match(reportingSource, /Pairs used/);
  assert.match(reportingSource, /Hardship changes/);
  assert.match(reportingSource, /Closest score/);
});

test("optional and circumstantial sit-outs remain separate in finished-set reporting", () => {
  assert.match(reportingSource, /Circumstantial sit-outs/);
  assert.match(reportingSource, /Optional sit-outs/);
});

test("hardship save flow delegates directly to one dominant mutation authority", () => {
  assert.match(hardshipsSource, /function getDominantHardshipLedger\(\)\{\s*return getActiveHardshipLedger\(\);\s*\}/);
  const start = source.indexOf("function applyHardshipSaveIntent");
  const end = source.indexOf("function restrictionMemoryHasActiveRule", start);
  const saveIntent = source.slice(start, end);
  assert.ok(start >= 0 && end > start);
  assert.match(saveIntent, /increaseDominantHardshipForSide/);
  assert.match(saveIntent, /reduceDominantHardshipForSide/);
  assert.doesNotMatch(source, /function increaseHardshipRuleForSide\(/);
  assert.doesNotMatch(source, /function reduceHardshipRuleForSide\(/);
});


test("Badminton rating engine is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(ratingsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RATINGS/);
  assert.match(source, /ratingModule\.create/);
  assert.doesNotMatch(source, /function applyRatingChanges\(/);
  assert.match(ratingsSource, /function applyRatingChanges\(/);
});


test("Badminton court renderer is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(rendererSource));
  assert.match(source, /window\.BASELINE_BADMINTON_COURT_RENDERER/);
  assert.match(source, /courtRendererModule\.create/);
  assert.doesNotMatch(source, /function renderCourtDiagram\(/);
  assert.doesNotMatch(source, /function renderBoundaryMask\(/);
  assert.match(rendererSource, /function renderCourtDiagram\(/);
  assert.match(rendererSource, /function renderBoundaryMask\(/);
});


test("Badminton restriction model is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(restrictionsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RESTRICTIONS/);
  assert.match(source, /restrictionModule\.create/);
  assert.doesNotMatch(source, /function normaliseShotRestrictions\(/);
  assert.doesNotMatch(source, /function getPresetOrder\(/);
  assert.match(restrictionsSource, /function normaliseShotRestrictions\(/);
  assert.match(restrictionsSource, /function getPresetOrder\(/);
});


test("Badminton hardship ledger is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(hardshipsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_HARDSHIPS/);
  assert.match(source, /hardshipModule\.create/);
  assert.doesNotMatch(source, /function getActiveHardshipLedger\(/);
  assert.doesNotMatch(source, /function setDominantHardshipRuleForSide\(/);
  assert.match(hardshipsSource, /function getActiveHardshipLedger\(/);
  assert.match(hardshipsSource, /function setDominantHardshipRuleForSide\(/);
});


test("Badminton controller stays below the post-split size ceiling", () => {
  const lines = source.split("\n").length;
  assert.ok(lines < 2400, `controller grew back to ${lines} lines`);
  assert.ok(source.length < 113000, `controller grew back to ${source.length} characters`);
});


test("Badminton state hydration is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(hydrationSource));
  assert.match(source, /window\.BASELINE_BADMINTON_STATE_HYDRATION/);
  assert.match(source, /stateHydrationModule\.create/);
  const start = source.indexOf("function hydrateLoadedState");
  const end = source.indexOf("function hydrateSessionFromServer", start);
  const wrapper = source.slice(start, end);
  assert.match(wrapper, /stateHydrator\.hydrate\(parsed\)/);
  assert.ok(wrapper.length < 400, "controller hydration wrapper should remain small");
  assert.match(hydrationSource, /currentCircumstantialSitOutPlayerIds/);
  assert.match(hydrationSource, /hardshipRecords:/);
});


test("Badminton matchmaker is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(matchmakerSource));
  assert.match(source, /window\.BASELINE_BADMINTON_MATCHMAKER/);
  assert.match(source, /matchmakerModule\.create/);
  assert.doesNotMatch(source, /function buildCurrentCourtSet\(/);
  assert.doesNotMatch(source, /function chooseSitOutPlayers\(/);
  assert.match(matchmakerSource, /function buildCurrentCourtSet\(/);
  assert.match(matchmakerSource, /function chooseSitOutPlayers\(/);
});


test("Badminton rule-admin logic is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(ruleAdminSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RULE_ADMIN/);
  assert.match(source, /ruleAdminModule\.create/);
  assert.doesNotMatch(source, /function renderRuleAdmin\(/);
  assert.doesNotMatch(source, /function bindRuleAdminActions\(/);
  assert.match(ruleAdminSource, /function renderRuleAdmin\(/);
  assert.match(ruleAdminSource, /function bindRuleAdminActions\(/);
  assert.match(ruleAdminSource, /function ensureRuleAdminShape\(/);
});


test("Badminton reporting views are a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(reportingSource));
  assert.match(source, /window\.BASELINE_BADMINTON_REPORTING/);
  assert.match(source, /reportingModule\.create/);
  assert.doesNotMatch(source, /function renderStandings\(/);
  assert.doesNotMatch(source, /function renderMatchHistory\(/);
  assert.doesNotMatch(source, /function renderFinishedGames\(/);
  assert.match(reportingSource, /function renderStandings\(/);
  assert.match(reportingSource, /function renderMatchHistory\(/);
  assert.match(reportingSource, /function renderFinishedGames\(/);
});


test("Badminton court-card presentation is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(courtCardsSource));
  assert.match(courtCardsSource, /<summary>Edit Variables<\/summary>/); // court adjustments control; separate from score submission
  assert.match(source, /window\.BASELINE_BADMINTON_COURT_CARDS/);
  assert.match(source, /courtCardsModule\.create/);
  assert.doesNotMatch(source, /function renderCourtCard\(/);
  assert.doesNotMatch(source, /function renderCourtVariableEditor\(/);
  assert.match(courtCardsSource, /function renderCourtCard\(/);
  assert.match(courtCardsSource, /function renderCourtVariableEditor\(/);
});


test("Badminton roster and pair management is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(rosterSource));
  assert.match(source, /window\.BASELINE_BADMINTON_ROSTER/);
  assert.match(source, /rosterModule\.create/);
  assert.doesNotMatch(source, /function renderPlayers\(/);
  assert.doesNotMatch(source, /function bindRosterActions\(/);
  assert.match(rosterSource, /function renderPlayers\(/);
  assert.match(rosterSource, /function bindRosterActions\(/);
  assert.match(rosterSource, /function normalizePairSummaryKeys\(/);
});

test("Badminton game-plan orchestration is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(gamePlanSource));
  assert.match(source, /window\.BASELINE_BADMINTON_GAME_PLAN/);
  assert.match(source, /gamePlanModule\.create/);
  assert.doesNotMatch(source, /function generateGamePlan\(/);
  assert.doesNotMatch(source, /function renderGamePlan\(/);
  assert.match(gamePlanSource, /function generateGamePlan\(/);
  assert.match(gamePlanSource, /function renderGamePlan\(/);
});

test("Badminton score and result workflow is a separate syntactically valid module", () => {
  assert.doesNotThrow(() => new Function(resultsSource));
  assert.match(source, /window\.BASELINE_BADMINTON_RESULTS/);
  assert.match(source, /resultsModule\.create/);
  assert.doesNotMatch(source, /function syncCourtScoresFromInputs\(/);
  assert.doesNotMatch(source, /function markCourtSaved\(/);
  assert.match(resultsSource, /function syncCourtScoresFromInputs\(/);
  assert.match(resultsSource, /function markCourtSaved\(/);
  assert.match(resultsSource, /function canSaveCourtNow\(/);
});


test("Badminton split preserves runtime callback contracts", () => {
  assert.match(source, /syncCourtScoresFromInputs:function\(index\)\{ return syncCourtScoresFromInputs\(index\); \}/);
  assert.match(source, /refreshCourtInputUi:function\(index\)\{ return refreshCourtInputUi\(index\); \}/);
  assert.match(source, /requestNoGameConfirmation:function\(index, input\)\{ return requestNoGameConfirmation\(index, input\); \}/);
  assert.match(source, /protectLocalCurrentState:function\(ms\)\{ return protectLocalCurrentState\(ms\); \}/);
  assert.match(source, /ensureCurrentCourtSaveKeys:function\(force\)\{ return ensureCurrentCourtSaveKeys\(force\); \}/);
  assert.match(source, /getPlayer:function\(id\)\{ return getPlayer\(id\); \}/);
  assert.match(source, /abortServerLoad:function\(\)\{/);
  assert.doesNotMatch(gamePlanSource, /\bserverLoadAbortController\b/);
  assert.match(gamePlanSource, /const getPlayer = options\.getPlayer;/);
  assert.match(gamePlanSource, /const abortServerLoad = options\.abortServerLoad;/);
});

test("Badminton moderator display name and login identity remain distinct", () => {
  assert.match(source, /const SITE_MODERATOR_CANONICAL_LOGIN = 'PeterBW';/);
  assert.match(rosterSource, /player\.name = 'Peter Bates-Wilkinson';/);
  assert.match(rosterSource, /player\.loginUsername = moderatorCanonicalLogin;/);
});


test("Badminton Save Results uses the browser window rather than the module-only global alias", () => {
  assert.match(resultsSource, /onclick="return window\.BASELINE_saveCourtResultButton \? window\.BASELINE_saveCourtResultButton\(event,this\) : false;"/);
  assert.doesNotMatch(resultsSource, /onclick="return global\.BASELINE_saveCourtResultButton/);
});

test("Badminton login options expose PeterBW as the username and collapse moderator aliases", () => {
  assert.match(rosterSource, /addCanonicalLoginOption\(moderatorCanonicalLogin, moderatorCanonicalLogin/);
  assert.match(rosterSource, /const canonical = normalizeKnownLoginName\(raw\)/);
  assert.match(rosterSource, /isModeratorLogin \? moderatorCanonicalLogin/);
  assert.doesNotMatch(rosterSource, /addLoginOption\(map, moderatorCanonicalLogin, 'Peter Bates-Wilkinson'/);
});

test("entering the top-level Game Plan tab returns to the primary Game Plan subtab", () => {
  assert.match(gamePlanSource, /function activateGamePlanSubtab\(target, historyMode\)/);
  assert.match(gamePlanSource, /\.tab\[data-target="gameplan"\]/);
  assert.match(gamePlanSource, /activateGamePlanSubtab\('plan'\)/);
});

test("Badminton repaired modules carry fresh cache revisions", () => {
  assert.match(htmlSource, /badminton-session-state-hydration\.js\?v=BADMINTON_AUTHORITATIVE_SCORE_IDENTITY_20261004_5/);
  assert.match(htmlSource, /badminton-session-roster\.js\?v=BADMINTON_AUTHORITATIVE_SCORE_IDENTITY_20261004_5/);
  assert.match(htmlSource, /badminton-session-results\.js\?v=BADMINTON_SCORE_ENTRY_RACE_FIX_20261004_7/);
  assert.match(htmlSource, /badminton-session-hardships\.js\?v=BADMINTON_HARDSHIP_MEMORY_REPAIR_20261004_8/);
  assert.match(htmlSource, /badminton-session-game-plan\.js\?v=BADMINTON_LIVE_SCORE_STATE_REPAIR_20261004_8/);
  assert.match(htmlSource, /baseline-badminton-session\.js\?v=BADMINTON_HARDSHIP_ROLLOVER_PERSISTENCE_20261004_9/);
});


test("score permission resolves generated court snapshots back to canonical Player ID records", () => {
  const start = source.indexOf("function currentUserCanScoreCourt");
  const end = source.indexOf("function refreshCurrentCourtCard", start);
  const permission = source.slice(start, end);
  assert.match(permission, /courtPlayer && courtPlayer\.id \? getPlayer\(courtPlayer\.id\) : null/);
  assert.match(permission, /currentUserMatchesPlayer\(canonicalPlayer \|\| courtPlayer\)/);
});


test("legacy pair-summary migration helper is owned by the roster module after the split", () => {
  assert.match(rosterSource, /function getPlayerByNameForRatingMigration\(name\)/);
  assert.match(rosterSource, /names\.map\(getPlayerByNameForRatingMigration\)/);
  assert.doesNotMatch(source, /getPlayerByNameForRatingMigration:function/);
});

test("Results owns score-generation matching locally instead of calling a missing controller helper", () => {
  assert.doesNotMatch(resultsSource, /const inputMatchesGeneration = options\.inputMatchesGeneration/);
  assert.doesNotMatch(source, /inputMatchesGeneration:function/);
  assert.match(resultsSource, /const inputMatchesGeneration = function\(input\)/);
});

test("Badminton render failure diagnostics never instruct users to clear browser session data", () => {
  assert.doesNotMatch(source, /clear stale local session data/i);
  assert.match(source, /render failed during/);
});


test("Badminton server auth is authoritative for moderator/admin score permission", () => {
  const start = source.indexOf("function serverAuthIsLoggedIn");
  const end = source.indexOf("function currentUserCanEditPlayerPrefs", start);
  const authBlock = source.slice(start, end);
  assert.match(authBlock, /lastServerAuth\.logged_in/);
  assert.match(authBlock, /lastServerAuth\.is_developer \|\| lastServerAuth\.is_badminton_admin/);
  const managerStart = authBlock.indexOf("function currentUserIsManager");
  const managerBlock = authBlock.slice(managerStart);
  assert.ok(
    managerBlock.indexOf("if(currentUserIsModerator()) return true;") <
      managerBlock.indexOf("auth\.authed !== true"),
    "server-authoritative moderator/admin check must run before generic sitewide auth gating"
  );
});

test("Badminton account matching includes authoritative user IDs", () => {
  assert.match(source, /tokens\.push\('uid:' \+ String\(serverUserId\)\)/);
  assert.match(rosterSource, /player\.loginUserId \|\| player\.linkedUserId \|\| player\.userId \|\| player\.uid/);
  assert.match(hydrationSource, /loginUserId: String\(player && \(player\.loginUserId \|\| player\.linkedUserId \|\| player\.userId \|\| player\.uid/);
});

test("Players & Pairs retains real account metadata behind canonical login labels", () => {
  assert.match(rosterSource, /data-login-user-id=/);
  assert.match(rosterSource, /data-login-email=/);
  assert.match(rosterSource, /const selectedUserId = selectedOption/);
  assert.match(rosterSource, /player\.loginUserId = nextLogin/);
  assert.match(rosterSource, /player\.loginEmail = nextLogin/);
  const buildStart = rosterSource.indexOf("function buildLoginOptions");
  const buildEnd = rosterSource.indexOf("function loadLoginOptions", buildStart);
  const buildBlock = rosterSource.slice(buildStart, buildEnd);
  assert.ok(
    buildBlock.indexOf("loginOptions.forEach") < buildBlock.indexOf("if(!map[canonicalModeratorKey])"),
    "real login records must be considered before the PeterBW fallback alias"
  );
});


test("court cards receive the Results hardship renderer after the module split", () => {
  const start = source.indexOf("const courtCardRenderer = courtCardsModule.create");
  const end = source.indexOf("const renderAttendanceSelector", start);
  const wiring = source.slice(start, end);
  assert.match(wiring, /renderHardshipControl:function\(court, phase, index\)\{ return renderHardshipControl\(court, phase, index\); \}/);
  assert.match(courtCardsSource, /const renderHardshipControl = options\.renderHardshipControl;/);
});


test("delayed score autofill blanking never erases player-entered court scores", () => {
  const start = resultsSource.indexOf("function hardBlankCurrentScoreInputs");
  const end = resultsSource.indexOf("function confirmNoGameForCourt", start);
  const blanking = resultsSource.slice(start, end);
  assert.match(blanking, /const score1AlreadyEntered = court\.score1 != null;/);
  assert.match(blanking, /const score2AlreadyEntered = court\.score2 != null;/);
  assert.match(blanking, /if\(score1AlreadyEntered \|\| score2AlreadyEntered\) return;/);
  assert.doesNotMatch(blanking, /court\.score1 = null;/);
  assert.doesNotMatch(blanking, /court\.score2 = null;/);
});


test("server verification cannot overwrite newer live Badminton court state", () => {
  const start = source.indexOf("function postServerState");
  const end = source.indexOf("function queueServerSave", start);
  const saveBlock = source.slice(start, end);
  assert.match(saveBlock, /const requestState=JSON\.parse\(JSON\.stringify\(state\)\)/);
  assert.match(saveBlock, /serverPayload\(requestState\)/);
  assert.match(saveBlock, /hardshipSnapshot\(requestState\.hardshipRecords\)/);
  assert.match(saveBlock, /if\(\(Number\(state&&state\.localUpdatedAt\|\|0\)\|\|0\)<=requestLocalUpdatedAt\) state=hydrateLoadedState\(verified\.state\)/);
});

test("score and hardship draft edits are marked as newer server-side state", () => {
  const start = gamePlanSource.indexOf("function bindPlanActions");
  const end = gamePlanSource.indexOf("function applyCourtSitOutSelection", start);
  const actions = gamePlanSource.slice(start, end);
  const scoreStart = actions.indexOf("const handleScoreEdit");
  const scoreEnd = actions.indexOf("refs().currentGamesGrid.addEventListener", scoreStart);
  const scoreBlock = actions.slice(scoreStart, scoreEnd);
  assert.match(scoreBlock, /markLocalChange\(\)/);
  assert.match(scoreBlock, /queueServerSave\(\)/);

  const hardshipStart = actions.indexOf("const commitHardshipChoice");
  const hardshipEnd = actions.indexOf("const handleScoreEdit", hardshipStart);
  const hardshipBlock = actions.slice(hardshipStart, hardshipEnd);
  assert.match(hardshipBlock, /markLocalChange\(\)/);
  assert.match(hardshipBlock, /queueServerSave\(\)/);
});

test("local Badminton revision marker is strictly monotonic", () => {
  const start = source.indexOf("function markLocalChange");
  const end = source.indexOf("function updateServerAuth", start);
  const block = source.slice(start, end);
  assert.match(block, /Math\.max\(Date\.now\(\),\(Number\(state && state\.localUpdatedAt \|\| 0\)\|\|0\)\+1\)/);
});
