import { INITIAL_PARTY_IDS, PARTY_BLUEPRINTS } from '../data/meridian-grove.js?v=REALM_CANONICAL_COMPLETE_20261018_1';
import { chooseRandomEncounter, movePlayer } from './jrpg-engine.js?v=REALM_CANONICAL_COMPLETE_20261018_1';
import { MeridianGroveGame } from './exploration-jrpg.js?v=REALM_CANONICAL_COMPLETE_20261018_1';

const clone = (value) => JSON.parse(JSON.stringify(value));
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function repairSavedParty(state, raw) {
  if (!Array.isArray(raw?.party)) return;
  state.party = INITIAL_PARTY_IDS.map((id) => {
    const blueprint = PARTY_BLUEPRINTS.find((candidate) => candidate.id === id);
    const saved = raw.party.find((candidate) => candidate?.id === id) || {};
    const member = { ...clone(blueprint), ...clone(saved || {}) };
    member.equipment = { ...blueprint.equipment, ...(saved?.equipment || {}) };
    member.abilities = Array.from(new Set([...(blueprint.abilities || []), ...(saved?.abilities || [])]));
    member.statuses = Array.isArray(saved?.statuses) ? saved.statuses : [];
    member.maxHp = Math.max(1, Number(member.maxHp || blueprint.maxHp));
    member.maxMp = Math.max(0, Number(member.maxMp || blueprint.maxMp));
    member.hp = clamp(Number(member.hp ?? member.maxHp), 0, member.maxHp);
    member.mp = clamp(Number(member.mp ?? member.maxMp), 0, member.maxMp);
    member.level = Math.max(1, Number(member.level || 1));
    member.xp = Math.max(0, Number(member.xp || 0));
    member.atb = clamp(Number(member.atb || 0), 0, 100);
    return member;
  });
}

export class MeridianGroveStateSafeGame extends MeridianGroveGame {
  constructor(options = {}) {
    super(options);
    this.onExit = typeof options.onExit === 'function' ? options.onExit : () => {};
  }

  load() {
    const state = super.load();
    try {
      repairSavedParty(state,state);
      if (state.battle) {
        state.battle.escaped = Boolean(state.battle.escaped);
        state.battle.victory = Boolean(state.battle.victory);
      }
    } catch (error) {
      console.warn('Meridian Grove state-integrity repair was skipped.', error);
    }
    return state;
  }

  handlePointer(event) {
    const button = event.target.closest('button');
    if (button?.dataset.realmView === 'basecamp') {
      event.preventDefault();
      event.stopPropagation();
      this.save('return-basecamp');
      Promise.resolve(this.onExit()).catch((error) => console.error('Unable to return to Basecamp.', error));
      return;
    }
    super.handlePointer(event);
  }

  tryMove(dx, dy) {
    const now = performance.now();
    if (now < this.moveLockUntil || this.modal || this.state.battle) return;
    this.moveLockUntil = now + 92;
    this.music.ensure();
    const zoneComplete = this.state.zoneComplete;
    this.state.zoneComplete = false;
    const result = movePlayer(this.state, dx, dy);
    this.state.zoneComplete = zoneComplete;
    if (!result.moved) {
      this.root.querySelector('.jrpg-map-viewport')?.classList.add('is-bumped');
      setTimeout(() => this.root.querySelector('.jrpg-map-viewport')?.classList.remove('is-bumped'), 140);
      return;
    }
    if (result.poi) this.handlePoi(result.poi);
    else if (result.encounterReady) this.startEncounter(chooseRandomEncounter(this.state), 'random');
    this.save('map-step');
    this.renderAll();
  }

  finishBattleFlow(outcome) {
    if (outcome === 'defeat' && this.state.battle) this.state.battle.escaped = true;
    super.finishBattleFlow(outcome);
  }
}

export function mountMeridianGrove(options) {
  const game = new MeridianGroveStateSafeGame(options);
  game.mount();
  return game;
}
