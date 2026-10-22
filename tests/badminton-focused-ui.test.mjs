import test from 'node:test';
import assert from 'node:assert/strict';

import { GAMES, ZONES } from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-config.js';
import {
  escapeHtml,
  panelHtml,
  choiceButtons,
  feedbackHtml,
  nextButton,
  zoneButtons,
  resetScene
} from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-ui.js';

test('Badminton UI authority builds the complete Recreation shell from config',()=>{
  const html=panelHtml({
    games:GAMES,
    selectedId:'read-racket',
    progressLabel:id=>'Progress '+id
  });

  assert.match(html,/id="badmintonFocusedPanel"/);
  for(const game of GAMES){
    assert.match(html,new RegExp('data-badminton-game="'+game.id+'"'));
  }
  assert.match(html,/aria-selected="true"/);
  assert.match(html,/Progress read-racket/);
});

test('Badminton generic choice and zone markup escapes user-visible content',()=>{
  const choices=choiceButtons(['Safe','<unsafe>']);
  assert.match(choices,/&lt;unsafe&gt;/);
  assert.doesNotMatch(choices,/><unsafe></);

  const zones=zoneButtons(ZONES);
  for(const zone of ZONES)assert.match(zones,new RegExp(zone));
});

test('Badminton feedback, next controls and game-specific scenes remain owned by UI module',()=>{
  assert.match(feedbackHtml({correct:false,title:'Wrong',text:'Try again'}),/is-wrong/);
  assert.match(nextButton('Continue'),/>Continue</);
  assert.match(resetScene(),/Previous rally ends/);
  assert.equal(escapeHtml('<b>'), '&lt;b&gt;');
});
