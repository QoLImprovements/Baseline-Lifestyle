(function(){
  'use strict';

  var MIX_VERSION = 6;
  var DEFAULTS = { enabled:true, volume:0.58 };
  var MUSIC_GAMES = ['pairs','detectword','make24','trackcoin','ruleshift','block-grid','colour-sort','jigsaw','crossnumber','ninja'];
  var ctx = null;
  var master = null;
  var normalizedOutput = null;
  var compressor = null;
  var finalOutput = null;
  var activeGame = '';
  var timer = 0;
  var nextBarTime = 0;
  var barIndex = 0;
  var liveNodes = new Set();
  var unlocked = false;
  var SCHEDULE_AHEAD_SECONDS = 1.6;
  var SCHEDULER_INTERVAL_MS = 100;

  function clamp(value, min, max){
    var n = Number(value);
    return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : min;
  }

  function settingsAuthority(){ return window.BaselineGameStorage || null; }
  function readSettings(){
    var profile={};
    try{ profile=settingsAuthority()?.getProfile?.('hubsettings') || {}; }catch(_error){ profile={}; }
    var music=profile.music && typeof profile.music==='object' ? profile.music : {};
    return {
      enabled: music.enabled !== false,
      volume: clamp(music.volume == null ? DEFAULTS.volume : music.volume, 0, 1),
      mixVersion:MIX_VERSION,
      textScale: profile.textScale && typeof profile.textScale==='object' ? profile.textScale : { detectword:1, make24:1 }
    };
  }

  var settings = readSettings();

  function writeSettings(){
    var authority=settingsAuthority();
    if(!authority) return false;
    var profile={};
    try{ profile=authority.getProfile?.('hubsettings') || {}; }catch(_error){ profile={}; }
    profile.music={ enabled:settings.enabled, volume:settings.volume, mixVersion:MIX_VERSION };
    profile.textScale=settings.textScale && typeof settings.textScale==='object'
      ? {detectword:textScaleFor('detectword'),make24:textScaleFor('make24')}
      : {detectword:1,make24:1};
    try{ authority.setTemporaryProfile?.('hubsettings',profile); }catch(_error){}
    try{ authority.saveProfile?.('hubsettings',profile,{immediate:true,keepalive:false}); }catch(_error){}
    return true;
  }

  function midi(note){ return 440 * Math.pow(2, (note - 69) / 12); }

  function ensureContext(){
    if(ctx) return ctx;
    var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if(!AudioContextCtor) return null;
    ctx = new AudioContextCtor();

    master = ctx.createGain();
    normalizedOutput = ctx.createGain();
    compressor = ctx.createDynamicsCompressor();
    finalOutput = ctx.createGain();

    master.gain.value = 0;

    // The synth voices are intentionally low-level. Apply make-up gain before
    // the final limiter so 100% represents a normal, useful listening level.
    normalizedOutput.gain.value = 1.55;

    compressor.threshold.value = -16;
    compressor.knee.value = 8;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.008;
    compressor.release.value = 0.24;

    finalOutput.gain.value = 0.78;

    master.connect(normalizedOutput);
    normalizedOutput.connect(compressor);
    compressor.connect(finalOutput);
    finalOutput.connect(ctx.destination);

    applyGain();
    return ctx;
  }

  function realmFactor(){
    if(activeGame !== 'ninja') return 1;
    var volume = document.querySelector('[data-realm-audio-volume]');
    var mute = document.querySelector('[data-realm-audio-mute]');
    var factor = volume ? clamp(volume.value, 0, 1) : 1;
    var muted = mute && mute.getAttribute('aria-pressed') === 'true';
    return muted ? 0 : factor;
  }

  function applyGain(){
    if(!master || !ctx) return;
    var target = settings.enabled && activeGame ? settings.volume * realmFactor() : 0;
    try{
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(target, ctx.currentTime, 0.06);
    }catch(_error){ master.gain.value = target; }
  }

  function stopLiveNodes(){
    // Fade active oscillators before stopping. An abrupt stop/disconnect can
    // sound like a crackle when switching games or muting music.
    var now=ctx ? ctx.currentTime : 0;
    liveNodes.forEach(function(node){
      try{
        var envelope=node._baselineEnvelope;
        if(envelope && ctx){
          envelope.gain.cancelScheduledValues(now);
          envelope.gain.setTargetAtTime(0.0001,now,0.008);
        }
        node.stop(now+0.055);
      }catch(_error){}
    });
    liveNodes.clear();
  }

  function makeVoice(kind, note, start, duration, level, pan){
    if(!ctx || !master) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    var filter = ctx.createBiquadFilter();
    var stereo = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    var startAt = Math.max(ctx.currentTime, start);
    var endAt = startAt + duration;

    if(kind === 'bass'){
      osc.type = 'triangle';
      filter.type = 'lowpass';
      filter.frequency.value = 680;
      filter.Q.value = 0.8;
    }else if(kind === 'lead'){
      osc.type = 'triangle';
      filter.type = 'lowpass';
      filter.frequency.value = 2450;
    }else if(kind === 'mallet' || kind === 'bell'){
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.value = kind === 'bell' ? 3200 : 2300;
      filter.Q.value = 0.5;
    }else if(kind === 'pluck'){
      osc.type = 'triangle';
      filter.type = 'lowpass';
      filter.frequency.value = 1800;
    }else if(kind === 'flute'){
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.value = 2100;
    }else{
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.value = 1800;
    }

    osc.frequency.setValueAtTime(midi(note), startAt);
    if(kind === 'mallet') osc.detune.setValueAtTime(((note % 3) - 1) * 2.5, startAt);

    var attack = Math.min(duration*0.22,kind === 'pad' ? 0.12 : (kind==='flute'?0.035:0.009));
    var release = Math.min(duration*0.55,kind === 'pad' ? 0.40 : (kind === 'flute' ? 0.19 : 0.12));
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, level), startAt + attack);
    gain.gain.setValueAtTime(Math.max(0.0002, level * 0.72), Math.max(startAt + attack + 0.01, endAt - release));
    gain.gain.exponentialRampToValueAtTime(0.0001, endAt);

    osc.connect(filter);
    if(stereo){
      stereo.pan.value = clamp(pan == null ? 0 : pan, -1, 1);
      filter.connect(gain);
      gain.connect(stereo);
      stereo.connect(master);
    }else{
      filter.connect(gain);
      gain.connect(master);
    }

    osc._baselineEnvelope=gain;
    liveNodes.add(osc);
    osc.onended = function(){
      liveNodes.delete(osc);
      try{ osc.disconnect(); filter.disconnect(); gain.disconnect(); if(stereo) stereo.disconnect(); }catch(_error){}
    };
    osc.start(startAt);
    osc.stop(endAt + 0.03);
  }


  function kick(start, level){
    if(!ctx || !master) return;
    var osc=ctx.createOscillator(), gain=ctx.createGain();
    var at=Math.max(ctx.currentTime,start);
    osc.type='sine';
    osc.frequency.setValueAtTime(85,at);
    osc.frequency.exponentialRampToValueAtTime(46,at+0.18);
    gain.gain.setValueAtTime(0.0001,at);
    gain.gain.linearRampToValueAtTime(Math.max(0.0002,level),at+0.007);
    gain.gain.exponentialRampToValueAtTime(0.0001,at+0.19);
    osc.connect(gain);gain.connect(master);
    osc._baselineEnvelope=gain;
    liveNodes.add(osc);
    osc.onended=function(){liveNodes.delete(osc);try{osc.disconnect();gain.disconnect();}catch(_error){}};
    osc.start(at);osc.stop(at+0.20);
  }

  // Each game has its own written major-key theme: different melody, phrase,
  // rhythm, harmony, lead instrument, bass line and percussion. They are not
  // alternate tempos/transpositions of a common song.
  var TRACKS={
    pairs:{
      bpm:110,bars:32,lead:'mallet',chords:[[60,64,67],[55,59,62],[53,57,60],[60,64,67]],
      beats:[0,0.75,1.5,2.5,3.25],
      phrases:[[72,76,79,76,74],[71,74,79,81,79],[72,69,72,77,76],[72,79,76,74,72]],
      bassBeats:[0,2.5],kickBeats:[0,2],pad:0.010,leadLevel:0.012
    },
    detectword:{
      bpm:124,bars:40,lead:'pluck',chords:[[62,66,69],[57,61,64],[55,59,62],[62,66,69]],
      beats:[0,0.5,1.75,2.5,3],
      phrases:[[74,78,76,81,78],[76,73,71,76,74],[71,74,79,76,74],[78,76,74,73,74]],
      bassBeats:[0,1.5,3],kickBeats:[0,2.5],pad:0.007,leadLevel:0.011
    },
    make24:{
      bpm:132,bars:32,lead:'bell',chords:[[52,56,59],[57,61,64],[59,63,66],[52,56,59]],
      beats:[0,0.5,1,1.5,2,2.5,3,3.5],
      phrases:[[64,68,71,76,71,68,76,80],[69,73,76,81,76,73,69,76],[71,75,78,83,78,75,71,78],[76,80,83,80,76,71,68,64]],
      bassBeats:[0,2],kickBeats:[0,2],pad:0.006,leadLevel:0.009
    },
    trackcoin:{
      bpm:122,bars:36,lead:'pluck',chords:[[55,59,62],[60,64,67],[62,66,69],[55,59,62]],
      beats:[0,0.75,1.5,2,3.25],
      phrases:[[67,74,71,76,74],[72,79,76,74,72],[74,78,81,78,74],[79,74,71,69,67]],
      bassBeats:[0,1,2.5],kickBeats:[0,1.5,3],pad:0.007,leadLevel:0.010
    },
    ruleshift:{
      bpm:118,bars:32,lead:'lead',chords:[[57,61,64],[62,66,69],[64,68,71],[57,61,64]],
      beats:[0,1,1.5,2.75,3.5],
      phrases:[[69,73,76,81,78],[74,78,81,76,74],[76,80,83,78,76],[81,76,73,71,69]],
      bassBeats:[0,2.75],kickBeats:[0,2.75],pad:0.009,leadLevel:0.010
    },
    'block-grid':{
      bpm:108,bars:40,lead:'pluck',chords:[[50,54,57],[55,59,62],[57,61,64],[50,54,57]],
      beats:[0,0.75,1.5,2.5,3],
      phrases:[[62,66,69,74,69],[67,71,74,76,71],[69,73,76,73,69],[74,69,66,64,62]],
      bassBeats:[0,2],kickBeats:[0,2],pad:0.009,leadLevel:0.012
    },
    'colour-sort':{
      bpm:114,bars:32,lead:'flute',chords:[[53,57,60],[58,62,65],[60,64,67],[53,57,60]],
      beats:[0,0.5,1.25,2,3],
      phrases:[[65,69,72,74,72],[70,74,77,74,70],[72,76,79,76,72],[77,74,72,69,65]],
      bassBeats:[0,2.5],kickBeats:[0],pad:0.010,leadLevel:0.013
    },
    jigsaw:{
      bpm:106,bars:28,lead:'bell',chords:[[51,55,58],[56,60,63],[58,62,65],[51,55,58]],
      beats:[0,1,2.5],
      phrases:[[67,70,75],[68,72,75],[70,74,77],[75,72,70]],
      bassBeats:[0,2],kickBeats:[0,2],pad:0.011,leadLevel:0.012,legato:true
    },
    crossnumber:{
      bpm:126,bars:36,lead:'mallet',chords:[[59,63,66],[52,56,59],[54,58,61],[59,63,66]],
      beats:[0,0.5,1.5,2,3,3.5],
      phrases:[[71,75,78,75,73,71],[68,71,75,78,75,71],[70,73,78,82,78,73],[78,75,73,71,66,71]],
      bassBeats:[0,1.5,3],kickBeats:[0,2.5],pad:0.007,leadLevel:0.011
    },
    ninja:{
      bpm:136,bars:40,lead:'lead',chords:[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],
      beats:[0,0.5,1.25,2,2.5,3,3.5],
      phrases:[[72,76,79,84,79,76,72],[77,81,84,81,77,72,69],[79,83,86,83,79,74,71],[84,79,76,79,76,72,72]],
      bassBeats:[0,1,2,3],kickBeats:[0,1.5,2.5],pad:0.008,leadLevel:0.012
    }
  };

  function scheduleBar(track,bar,start){
    var beat=60/track.bpm;
    var chord=track.chords[bar%track.chords.length];
    var phrase=track.phrases[bar%track.phrases.length];
    var lastPhrase=bar%track.phrases.length===track.phrases.length-1;
    var variation=Math.floor(bar/track.phrases.length)%4;
    var softness=variation===0?0.87:(variation===2?1.04:0.96);

    // Rounded chord bed; shallow gain and staggered onsets avoid transients.
    chord.forEach(function(note,i){
      makeVoice('pad',note,start+i*0.025,beat*3.65,track.pad*softness,0);
    });
    track.bassBeats.forEach(function(position,i){
      var bassNote=chord[i%2===0?0:2]-12;
      makeVoice('bass',bassNote,start+beat*position,beat*Math.min(0.88,1.8/(track.bassBeats.length)),0.007*softness,0);
    });
    phrase.forEach(function(note,i){
      var position=track.beats[i%track.beats.length];
      var nextPosition=i+1<track.beats.length ? track.beats[i+1] : 4;
      var length=Math.max(0.10,Math.min(beat*(nextPosition-position)*(track.legato?0.91:0.70),beat*(track.legato?1.05:0.54)));
      var amplitude=track.leadLevel*(i===0?1.10:1)*softness;
      makeVoice(track.lead,note,start+beat*position,length,amplitude,0);
    });
    track.kickBeats.forEach(function(position,i){
      if(variation===0 && i>0) return;
      kick(start+beat*position,0.010*(i===0?1:0.72)*softness);
    });
    if(lastPhrase && variation===3){
      makeVoice('bell',chord[0]+12,start+beat*3.5,beat*0.4,0.006,0);
    }
  }

  function scheduler(){
    timer = 0;
    if(!ctx || !settings.enabled || !activeGame || !TRACKS[activeGame]) return;
    var track = TRACKS[activeGame];
    var barDur = 4 * 60 / track.bpm;

    // A background tab can throttle timers heavily. If scheduling has fallen
    // behind, advance the composition instead of firing missed bars at once.
    if(nextBarTime < ctx.currentTime - 0.05){
      var missedBars = Math.floor((ctx.currentTime - nextBarTime) / barDur) + 1;
      barIndex = (barIndex + missedBars) % track.bars;
      nextBarTime += missedBars * barDur;
    }
    if(nextBarTime < ctx.currentTime + 0.04) nextBarTime = ctx.currentTime + 0.04;

    // Keep only a short rolling window of Web Audio nodes queued. The old
    // 75-second look-ahead could leave hundreds of oscillators/gain/filter
    // nodes alive at once, which is particularly prone to crackle on mobile
    // audio hardware and can also stress desktop browsers.
    while(nextBarTime < ctx.currentTime + SCHEDULE_AHEAD_SECONDS){
      scheduleBar(track, barIndex, nextBarTime);
      nextBarTime += barDur;
      barIndex += 1;
      if(barIndex >= track.bars) barIndex = 0;
    }
    timer = window.setTimeout(scheduler, SCHEDULER_INTERVAL_MS);
  }

  function startActive(){
    if(!settings.enabled || !activeGame || !TRACKS[activeGame]) return;
    var c = ensureContext();
    if(!c) return;
    if(c.state === 'suspended'){
      c.resume().then(function(){ unlocked=true; restartScheduler(false); }).catch(function(){});
      return;
    }
    unlocked = true;
    restartScheduler(false);
  }

  function restartScheduler(resetBar){
    if(timer){ clearTimeout(timer); timer = 0; }
    stopLiveNodes();
    if(resetBar !== false) barIndex = 0;
    if(!ctx || !activeGame || !settings.enabled) { applyGain(); return; }
    nextBarTime = ctx.currentTime + 0.08;
    applyGain();
    scheduler();
  }

  function recoverPlayback(){
    if(!settings.enabled || !activeGame || !TRACKS[activeGame]) return;
    var c = ensureContext();
    if(!c) return;

    function recoverRunning(){
      unlocked = true;
      applyGain();
      // Healthy playback should be left completely alone.
      if(timer && nextBarTime > c.currentTime + 0.25) return;

      var track = TRACKS[activeGame];
      var barDur = 4 * 60 / track.bpm;
      if(nextBarTime && nextBarTime < c.currentTime){
        var missedBars = Math.floor((c.currentTime - nextBarTime) / barDur) + 1;
        barIndex = (barIndex + missedBars) % track.bars;
      }
      nextBarTime = c.currentTime + 0.08;
      if(timer){ clearTimeout(timer); timer = 0; }
      scheduler();
    }

    if(c.state === 'running'){
      recoverRunning();
      return;
    }

    var resumed = c.resume();
    if(resumed && typeof resumed.then === 'function') resumed.then(recoverRunning).catch(function(){});
    else recoverRunning();
  }

  function selectGame(gameId){
    var id = MUSIC_GAMES.indexOf(gameId) >= 0 ? gameId : '';
    if(id === activeGame) return;
    activeGame = id;
    barIndex = 0;
    applyGain();
    if(!id){
      if(timer){ clearTimeout(timer); timer=0; }
      stopLiveNodes();
      syncUi();
      return;
    }
    if(settings.enabled) startActive();
    syncUi();
  }

  function setEnabled(value){
    settings.enabled = Boolean(value);
    writeSettings();
    if(settings.enabled) startActive();
    else{
      if(timer){ clearTimeout(timer); timer=0; }
      stopLiveNodes();
      applyGain();
    }
    syncUi();
  }

  function supportedTextScaleGame(){ return activeGame==='detectword' || activeGame==='make24' ? activeGame : ''; }
  function textScaleFor(gameId){
    var id=gameId==='detectword'||gameId==='make24'?gameId:'';
    return id ? clamp(settings.textScale && settings.textScale[id] || 1,0.82,1.24) : 1;
  }
  function applyTextScale(gameId){
    var id=gameId||supportedTextScaleGame();
    if(!id) return;
    var panel=document.getElementById(id==='detectword'?'detectwordPanel':'make24Panel');
    if(panel) panel.style.setProperty('--game-text-scale',String(textScaleFor(id)));
  }
  function setTextScale(value){
    var id=supportedTextScaleGame();
    if(!id) return;
    settings.textScale=settings.textScale&&typeof settings.textScale==='object'?settings.textScale:{detectword:1,make24:1};
    settings.textScale[id]=clamp(value,0.82,1.24);
    writeSettings();
    applyTextScale(id);
    syncUi();
  }

  function setVolume(value){
    settings.volume = clamp(value,0,1);
    settings.mixVersion = MIX_VERSION;
    writeSettings();
    applyGain();
    syncUi();
  }

  function quickMusicMarkup(label){
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg><span class="sr-only">'+label+'</span>';
  }
  function syncQuickMusicButton(btn){
    var stateLabel=settings.enabled?'Music on':'Music off';
    btn.setAttribute('aria-label',settings.enabled?'Mute game music':'Enable game music');
    var tooltip=(settings.enabled?'Music on':'Music off')+' · Alt+M';
    btn.title=tooltip;
    btn.setAttribute('data-tooltip',tooltip);
    if(!btn.querySelector('svg') || !btn.querySelector('.sr-only')) btn.innerHTML=quickMusicMarkup(stateLabel);
    var hiddenLabel=btn.querySelector('.sr-only');
    if(hiddenLabel && hiddenLabel.textContent!==stateLabel) hiddenLabel.textContent=stateLabel;
    btn.classList.toggle('is-muted',!settings.enabled);
    btn.removeAttribute('data-hotkey-caption');
  }
  function syncUi(){
    document.querySelectorAll('[data-games-music-toggle]').forEach(function(btn){
      var pressed = settings.enabled ? 'true' : 'false';
      if(btn.matches('[data-games-music-quick]')){
        syncQuickMusicButton(btn);
      }else{
        var label = settings.enabled ? 'On' : 'Off';
        if(btn.textContent !== label) btn.textContent = label;
      }
      if(btn.getAttribute('aria-pressed') !== pressed) btn.setAttribute('aria-pressed', pressed);
    });
    document.querySelectorAll('[data-games-music-volume]').forEach(function(input){
      if(document.activeElement !== input && input.value !== String(settings.volume)) input.value = String(settings.volume);
    });
    var scaleGame=supportedTextScaleGame();
    document.querySelectorAll('[data-games-text-size-row]').forEach(function(row){ row.hidden=!scaleGame; });
    document.querySelectorAll('[data-games-text-size]').forEach(function(input){
      input.disabled=!scaleGame;
      if(scaleGame && document.activeElement!==input) input.value=String(textScaleFor(scaleGame));
    });
    if(scaleGame) applyTextScale(scaleGame);
  }

  function ensureSettingsPanel(){
    if(document.getElementById('gamesMusicSettingsPanel')) return;
    var panel = document.createElement('div');
    panel.id = 'gamesMusicSettingsPanel';
    panel.className = 'games-music-settings-overlay';
    panel.hidden = true;
    panel.innerHTML =
      '<section class="games-music-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="gamesMusicSettingsTitle">' +
        '<header><div><small>Baseline Recreation</small><h3 id="gamesMusicSettingsTitle">Settings</h3></div><button class="games-music-settings-close" type="button" data-games-settings-close aria-label="Close settings">×</button></header>' +
        '<div class="games-music-settings-list">' +
          '<section class="games-music-setting-row"><div><strong>Music</strong><small>Play the three-minute game theme.</small></div><button class="action ghost" type="button" data-games-music-toggle aria-pressed="true">On</button></section>' +
          '<label class="games-music-setting-row games-music-setting-row--slider"><span><strong>Music volume</strong><small>Game music level. 100% is the full normalized mix.</small></span><input data-games-music-volume type="range" min="0" max="1" step="0.05" value="0.58" aria-label="Game music volume"></label>' +
          '<label class="games-music-setting-row games-music-setting-row--slider" data-games-text-size-row hidden><span><strong>Game text size</strong><small>Adjust text and keypad sizing for this game.</small></span><input data-games-text-size type="range" min="0.82" max="1.24" step="0.06" value="1" aria-label="Game text size"></label>' +
        '</div>' +
      '</section>';
    document.body.appendChild(panel);
  }

  function controlHost(root){
    if(!root) return null;
    return root.querySelector('.game-window-actions')
      || root.querySelector('.crossnumber-actions')
      || root.querySelector('.game-toolbar')
      || root;
  }
  function quickMusicButton(){
    var btn=document.createElement('button');
    btn.type='button';
    btn.className='action ghost games-music-quick-toggle game-shell-action game-shell-action--icon';
    btn.setAttribute('data-games-music-toggle','');
    btn.setAttribute('data-games-music-quick','');
    btn.setAttribute('aria-pressed',settings.enabled?'true':'false');
    btn.innerHTML=quickMusicMarkup(settings.enabled?'Music on':'Music off');
    return btn;
  }
  function realmQuickMusicButton(){
    var btn=quickMusicButton();
    btn.className='realm-fab games-music-quick-toggle';
    btn.setAttribute('aria-label',settings.enabled?'Mute game music':'Enable game music');
    btn.title=settings.enabled?'Music on — press to mute':'Music off — press to enable';
    return btn;
  }
  function injectSettingsButtons(){
    var roots = ['pairsGameCard','wordGameCard','make24GameCard','trackCoinGamePanel','ruleShiftGameCard','blockGridGameCard','colourSortGameCard','crossnumberGamePanel'];
    roots.forEach(function(id){
      var root = document.getElementById(id);
      if(!root) return;
      var panel = root.closest('.game-panel') || root.closest('.puzzle-library-card') || root.parentElement;
      var host = controlHost(root);
      if(!host) return;
      // One coherent dock within the play window, in both windowed and fullscreen views.
      var playWindow = root.querySelector('.game-play-window') || root;
      // Never append an ancestor into its descendant. Legacy game shells can
      // already use the action container as the play-window wrapper.
      if(host!==playWindow && !host.contains(playWindow) && host.parentElement!==playWindow) playWindow.appendChild(host);
      var specifics = root.querySelector('.game-specific-actions');
      if(specifics){
        // The unified two-row dock is mobile-only. Desktop keeps its existing
        // game-specific controls in their original separate container.
        var mobileDock=window.matchMedia && window.matchMedia('(max-width:820px), (hover:none) and (pointer:coarse)').matches;
        if(mobileDock){
          Array.prototype.slice.call(specifics.children).forEach(function(control){
            if(!control.matches('button.action')) return;
            control.setAttribute('data-recreation-original-specific','');
            host.appendChild(control);
          });
        }else{
          Array.prototype.slice.call(host.querySelectorAll(':scope > [data-recreation-original-specific]')).forEach(function(control){
            specifics.appendChild(control);
            control.removeAttribute('data-recreation-original-specific');
          });
        }
      }
      host.classList.add('recreation-unified-controls');
      var existingQuick=(panel||root).querySelector('[data-games-music-quick]');
      if(!existingQuick){ existingQuick=quickMusicButton(); host.appendChild(existingQuick); }
      else if(existingQuick.parentElement!==host) host.appendChild(existingQuick);
      var existing=(panel||root).querySelector('[data-games-settings]');
      if(existing){ if(existing.parentElement!==host) host.appendChild(existing); return; }
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'action ghost games-settings-trigger game-shell-action game-shell-action--icon game-shell-action--settings';
      btn.setAttribute('data-games-settings','');
      btn.setAttribute('aria-haspopup','dialog');
      btn.setAttribute('aria-controls','gamesMusicSettingsPanel');
      btn.setAttribute('aria-label','Game settings');
      btn.title = 'Settings · Alt+S';
      btn.setAttribute('data-tooltip','Settings · Alt+S');
      btn.removeAttribute('data-hotkey-caption');
      btn.innerHTML = '<span class="games-settings-trigger__icon game-shell-action__icon" aria-hidden="true">⚙</span><span class="sr-only">Settings</span>';
      host.appendChild(btn);
    });
    var jigsawHost=document.querySelector('#weightCoherenceWorkspace .weight-coherence-actions');
    if(jigsawHost && !jigsawHost.querySelector('[data-games-music-quick]')) jigsawHost.appendChild(quickMusicButton());

  }

  function openSettings(trigger){
    ensureSettingsPanel();
    var panel = document.getElementById('gamesMusicSettingsPanel');
    if(!panel) return;
    // Browser fullscreen hides document.body overlays behind the fullscreen element.
    // Place the actual settings overlay inside that element until it closes.
    var fullscreenHost = document.fullscreenElement;
    if(fullscreenHost && panel.parentElement !== fullscreenHost) fullscreenHost.appendChild(panel);
    else if(!fullscreenHost && panel.parentElement !== document.body) document.body.appendChild(panel);
    panel.hidden = false;
    panel._gamesSettingsTrigger = trigger || null;
    syncUi();
    window.setTimeout(function(){ panel.querySelector('[data-games-settings-close]')?.focus?.(); },0);
  }

  function closeSettings(){
    var panel = document.getElementById('gamesMusicSettingsPanel');
    if(!panel) return;
    panel.hidden = true;
    if(panel.parentElement !== document.body) document.body.appendChild(panel);
    panel._gamesSettingsTrigger?.focus?.();
    panel._gamesSettingsTrigger = null;
  }

  document.addEventListener('fullscreenchange', function(){
    var panel=document.getElementById('gamesMusicSettingsPanel');
    if(!panel) return;
    var host=document.fullscreenElement;
    if(!panel.hidden && host && panel.parentElement!==host) host.appendChild(panel);
    else if(!host && panel.parentElement!==document.body) document.body.appendChild(panel);
  });

  function unlock(){
    if(!activeGame || !settings.enabled) return;
    var c = ensureContext();
    if(!c) return;
    if(unlocked && c.state === 'running' && timer && nextBarTime > c.currentTime + 0.25) return;
    recoverPlayback();
  }

  document.addEventListener('click', function(event){
    var settingsBtn = event.target.closest('[data-games-settings]');
    if(settingsBtn){ event.preventDefault(); openSettings(settingsBtn); return; }
    if(event.target.closest('[data-games-settings-close]')){ event.preventDefault(); closeSettings(); return; }
    var toggle = event.target.closest('[data-games-music-toggle]');
    if(toggle){ event.preventDefault(); setEnabled(!settings.enabled); return; }
    if(event.target.closest('[data-realm-audio-mute]')) window.setTimeout(applyGain,0);
  }, true);

  document.addEventListener('input', function(event){
    if(event.target.matches('[data-games-music-volume]')) setVolume(event.target.value);
    if(event.target.matches('[data-games-text-size]')) setTextScale(event.target.value);
    if(event.target.matches('[data-realm-audio-volume]')) applyGain();
  }, true);

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
      var panel=document.getElementById('gamesMusicSettingsPanel');
      if(panel && !panel.hidden) closeSettings();
      return;
    }
    if(!event.altKey || event.ctrlKey || event.metaKey || event.isComposing || !activeGame || activeGame === 'ninja') return;
    var key=String(event.key||'').toLowerCase();
    if(key === 'm'){
      event.preventDefault();
      setEnabled(!settings.enabled);
      return;
    }
    if(key === 's'){
      if(activeGame === 'jigsaw') return;
      event.preventDefault();
      var trigger=document.querySelector('[data-games-settings]');
      openSettings(trigger || null);
    }
  });

  document.addEventListener('pointerdown', unlock, { passive:true });
  document.addEventListener('keydown', function(){ if(!unlocked) unlock(); }, { passive:true });

  window.addEventListener('focus', recoverPlayback, { passive:true });
  window.addEventListener('pageshow', recoverPlayback, { passive:true });
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden) recoverPlayback();
  }, { passive:true });
  document.addEventListener('baseline:game-storage',function(){
    var wasEnabled=settings.enabled;
    settings=readSettings();
    applyGain();
    if(settings.enabled && activeGame){
      // Ordinary game/profile saves must never restart the composition. They can
      // happen on every keypress. Only an actual disabled -> enabled transition
      // needs a fresh start; otherwise recoverPlayback leaves healthy audio alone.
      if(!wasEnabled) startActive();
      else recoverPlayback();
    }else if(!settings.enabled){
      if(timer){ clearTimeout(timer); timer=0; }
      stopLiveNodes();
    }
    syncUi();
  });

  function mutationAddsElement(records){
    return Array.prototype.some.call(records||[],function(record){
      return Array.prototype.some.call(record.addedNodes||[],function(node){ return !!node && node.nodeType===1; });
    });
  }
  function init(){
    ensureSettingsPanel();
    injectSettingsButtons();
    syncUi();
    var observer = new MutationObserver(function(records){
      if(!mutationAddsElement(records)) return;
      injectSettingsButtons();
      syncUi();
    });
    observer.observe(document.body,{childList:true,subtree:true});
    var wasMobileDock=window.matchMedia && window.matchMedia('(max-width:820px), (hover:none) and (pointer:coarse)').matches;
    window.addEventListener('resize',function(){
      var isMobileDock=window.matchMedia && window.matchMedia('(max-width:820px), (hover:none) and (pointer:coarse)').matches;
      if(isMobileDock!==wasMobileDock){
        wasMobileDock=isMobileDock;
        injectSettingsButtons();
      }
    },{passive:true});
  }

  window.BaselineGamesMusic = Object.freeze({
    selectGame:selectGame,
    setEnabled:setEnabled,
    setVolume:setVolume,
    openSettings:openSettings,
    refreshControls:function(){ injectSettingsButtons(); syncUi(); },
    settings:function(){ return {enabled:settings.enabled,volume:settings.volume,textScale:{detectword:textScaleFor('detectword'),make24:textScaleFor('make24')}}; }
  });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();