(function(){
  'use strict';

  var MIX_VERSION = 5;
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
  var SCHEDULE_AHEAD_SECONDS = 8;
  var SCHEDULER_INTERVAL_MS = 900;

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
    normalizedOutput.gain.value = 3.2;

    compressor.threshold.value = -10;
    compressor.knee.value = 8;
    compressor.ratio.value = 8;
    compressor.attack.value = 0.008;
    compressor.release.value = 0.24;

    finalOutput.gain.value = 0.80;

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
    liveNodes.forEach(function(node){
      try{ node.stop(); }catch(_error){}
      try{ node.disconnect(); }catch(_error){}
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
    }else if(kind === 'mallet'){
      osc.type = 'sine';
      filter.type = 'bandpass';
      filter.frequency.value = Math.min(5200, midi(note) * 2.4);
      filter.Q.value = 0.7;
    }else{
      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.value = 1800;
    }

    osc.frequency.setValueAtTime(midi(note), startAt);
    if(kind === 'mallet') osc.detune.setValueAtTime(((note % 3) - 1) * 2.5, startAt);

    var attack = kind === 'pad' ? 0.16 : 0.012;
    var release = kind === 'pad' ? 0.55 : (kind === 'mallet' ? 0.22 : 0.12);
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
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(92, start);
    osc.frequency.exponentialRampToValueAtTime(42, start + 0.16);
    gain.gain.setValueAtTime(level, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
    osc.connect(gain); gain.connect(master);
    liveNodes.add(osc);
    osc.onended = function(){ liveNodes.delete(osc); };
    osc.start(start); osc.stop(start + 0.2);
  }

  function tick(start, level){
    if(!ctx || !master) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    var filter = ctx.createBiquadFilter();
    osc.type = 'triangle';
    osc.frequency.value = 1180;
    filter.type = 'highpass'; filter.frequency.value = 760;
    gain.gain.setValueAtTime(level, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.035);
    osc.connect(filter); filter.connect(gain); gain.connect(master);
    liveNodes.add(osc);
    osc.onended = function(){ liveNodes.delete(osc); };
    osc.start(start); osc.stop(start + 0.04);
  }

  var TRACKS = {
    pairs:{
      bpm:92, bars:69,
      sections:[
        {bars:6,  prog:[[60,64,67],[57,60,64]], motif:[72,76,74,71], density:4, style:'quiet'},
        {bars:12, prog:[[60,64,67],[57,60,64],[65,69,72],[55,59,62]], motif:[72,76,74,79,76,72,74,71], density:8, style:'warm'},
        {bars:12, prog:[[62,65,69],[59,62,67],[64,67,71],[57,60,64]], motif:[74,77,76,81,79,76,72,74], density:8, style:'full'},
        {bars:8,  prog:[[53,57,60],[55,59,62],[57,60,64]], motif:[69,72,71,74,72,69], density:6, style:'quiet'},
        {bars:12, prog:[[65,69,72],[60,64,69],[62,65,69],[55,60,64]], motif:[76,79,81,84,81,79,76,74], density:8, style:'lift'},
        {bars:13, prog:[[60,64,67],[57,60,64],[65,69,72],[55,59,62]], motif:[72,74,76,79,81,76,74,71], density:8, style:'full'},
        {bars:6,  prog:[[60,64,67],[57,60,64],[60,64,67]], motif:[76,74,72,71], density:4, style:'quiet'}
      ]
    },
    detectword:{
      bpm:104, bars:78,
      sections:[
        {bars:8, prog:[[50,57,62],[48,55,60]], motif:[74,73,71,69], density:4, style:'quiet'},
        {bars:14,prog:[[50,57,62],[48,55,60],[53,60,65],[46,53,58]], motif:[74,73,74,69,71,74,76,71], density:8, style:'warm'},
        {bars:14,prog:[[52,59,64],[49,56,61],[55,62,67],[48,55,60]], motif:[76,74,71,73,78,76,74,69], density:8, style:'full'},
        {bars:10,prog:[[45,52,57],[47,54,59],[48,55,60]], motif:[69,71,73,72,69], density:5, style:'quiet'},
        {bars:14,prog:[[53,60,65],[50,57,62],[55,62,67],[46,53,58]], motif:[74,78,76,73,71,76,79,74], density:8, style:'lift'},
        {bars:12,prog:[[50,57,62],[48,55,60],[53,60,65],[46,53,58]], motif:[74,73,76,71,78,74,76,71], density:8, style:'full'},
        {bars:6, prog:[[50,57,62],[48,55,60],[50,57,62]], motif:[74,71,69], density:4, style:'quiet'}
      ]
    },
    make24:{
      bpm:120, bars:90,
      sections:[
        {bars:8, prog:[[48,55,60,64],[50,57,62,65]], motif:[60,67,64,72,62,69,65,74], density:8, style:'quiet'},
        {bars:16,prog:[[48,55,60,64],[50,57,62,65],[52,59,64,67],[47,55,59,62]], motif:[60,67,64,72,62,69,65,74,64,71,67,76,59,67,62,71], density:16, style:'drive'},
        {bars:16,prog:[[53,60,65,69],[50,57,62,65],[55,62,67,71],[52,59,64,67]], motif:[65,72,69,77,67,74,71,79,69,76,72,81,64,72,67,76], density:16, style:'full'},
        {bars:12,prog:[[45,52,57,60],[47,54,59,62],[48,55,60,64]], motif:[57,60,64,67,62,65,69,72], density:8, style:'quiet'},
        {bars:16,prog:[[52,59,64,67],[53,60,65,69],[50,57,62,65],[55,62,67,71]], motif:[64,71,67,76,65,72,69,77,67,74,71,79,72,76,79,83], density:16, style:'lift'},
        {bars:14,prog:[[48,55,60,64],[52,59,64,67],[50,57,62,65],[47,55,59,62]], motif:[60,64,67,72,62,65,69,74,64,67,71,76,59,62,67,71], density:16, style:'drive'},
        {bars:8, prog:[[48,55,60,64],[50,57,62,65],[48,55,60,64]], motif:[67,64,60,62,60], density:8, style:'quiet'}
      ]
    },
    trackcoin:{
      bpm:132, bars:99,
      sections:[
        {bars:8, prog:[[45,52,57],[43,50,55]], motif:[69,72,71,74], density:4, style:'quiet'},
        {bars:18,prog:[[45,52,57],[45,52,57],[43,50,55],[48,55,60]], motif:[69,72,76,72,71,74,79,74], density:8, style:'drive'},
        {bars:18,prog:[[48,55,60],[46,53,58],[43,50,55],[50,57,62]], motif:[72,76,81,76,74,79,83,79], density:8, style:'full'},
        {bars:14,prog:[[41,48,53],[43,50,55],[45,52,57]], motif:[64,67,69,72,69,67], density:6, style:'quiet'},
        {bars:18,prog:[[50,57,62],[48,55,60],[46,53,58],[43,50,55]], motif:[76,81,84,79,74,79,83,86], density:8, style:'lift'},
        {bars:15,prog:[[45,52,57],[43,50,55],[48,55,60],[50,57,62]], motif:[69,74,76,72,79,74,81,76], density:8, style:'drive'},
        {bars:8, prog:[[45,52,57],[43,50,55],[45,52,57]], motif:[74,72,69], density:4, style:'quiet'}
      ]
    },
    ruleshift:{
      bpm:124, bars:93,
      sections:[
        {bars:8, prog:[[48,55,60],[51,58,63]], motif:[72,67,70,74], density:4, style:'quiet'},
        {bars:17,prog:[[48,55,60],[51,58,63],[46,53,58],[49,56,61]], motif:[72,75,67,70,74,65,69,76], density:8, style:'drive'},
        {bars:17,prog:[[50,57,62],[53,60,65],[47,54,59],[51,58,63]], motif:[76,69,65,74,70,75,67,72], density:8, style:'full'},
        {bars:13,prog:[[45,52,57],[48,55,60],[50,57,62]], motif:[67,69,72,70,65], density:5, style:'quiet'},
        {bars:17,prog:[[53,60,65],[49,56,61],[51,58,63],[46,53,58]], motif:[79,72,75,67,74,70,76,69], density:8, style:'lift'},
        {bars:13,prog:[[48,55,60],[46,53,58],[51,58,63],[49,56,61]], motif:[72,67,75,70,65,74,76,69], density:8, style:'drive'},
        {bars:8, prog:[[48,55,60],[51,58,63],[48,55,60]], motif:[72,70,67], density:4, style:'quiet'}
      ]
    },
    'block-grid':{
      bpm:108, bars:81,
      sections:[
        {bars:8, prog:[[48,55,60,64],[50,57,62,65]], motif:[67,72,74,76,72,79,76,74], density:8, style:'quiet'},
        {bars:14,prog:[[48,55,60,64],[52,59,64,67],[45,52,57,60],[50,57,62,65]], motif:[67,72,76,72,69,74,77,74], density:8, style:'drive'},
        {bars:14,prog:[[53,60,65,69],[50,57,62,65],[55,62,67,71],[48,55,60,64]], motif:[69,72,77,74,71,76,79,76], density:8, style:'full'},
        {bars:10,prog:[[45,52,57,60],[47,54,59,62],[48,55,60,64]], motif:[64,67,69,72,67,64], density:6, style:'quiet'},
        {bars:14,prog:[[52,59,64,67],[53,60,65,69],[50,57,62,65],[55,62,67,71]], motif:[71,76,79,76,72,77,81,77], density:8, style:'lift'},
        {bars:13,prog:[[48,55,60,64],[50,57,62,65],[52,59,64,67],[47,54,59,62]], motif:[67,72,74,79,76,72,69,74], density:8, style:'drive'},
        {bars:8, prog:[[48,55,60,64],[45,52,57,60],[48,55,60,64]], motif:[72,69,67,64], density:4, style:'quiet'}
      ]
    },
    'colour-sort':{
      bpm:100, bars:75,
      sections:[
        {bars:8, prog:[[50,57,62,66],[47,54,59,62]], motif:[69,74,78,81,78,74,71,74], density:8, style:'quiet'},
        {bars:13,prog:[[50,57,62,66],[54,61,66,69],[47,54,59,62],[52,59,64,67]], motif:[69,74,78,81,76,81,78,74], density:8, style:'warm'},
        {bars:13,prog:[[55,62,67,71],[52,59,64,67],[57,64,69,73],[50,57,62,66]], motif:[71,74,79,83,81,78,76,74], density:8, style:'full'},
        {bars:9, prog:[[47,54,59,62],[50,57,62,66],[52,59,64,67]], motif:[66,69,71,74,71,69], density:6, style:'quiet'},
        {bars:13,prog:[[54,61,66,69],[57,64,69,73],[52,59,64,67],[55,62,67,71]], motif:[74,78,81,85,81,78,76,81], density:8, style:'lift'},
        {bars:12,prog:[[50,57,62,66],[52,59,64,67],[47,54,59,62],[55,62,67,71]], motif:[69,74,76,81,78,74,71,76], density:8, style:'warm'},
        {bars:7, prog:[[50,57,62,66],[47,54,59,62],[50,57,62,66]], motif:[74,71,69,66], density:4, style:'quiet'}
      ]
    },
    jigsaw:{
      bpm:88, bars:66,
      sections:[
        {bars:8, prog:[[55,62,67,71],[52,59,64,67]], motif:[74,79,76,71], density:4, style:'quiet'},
        {bars:11,prog:[[55,62,67,71],[52,59,64,67],[48,55,60,64],[50,57,62,66]], motif:[74,79,76,83,79,76], density:6, style:'warm'},
        {bars:11,prog:[[57,64,69,72],[53,60,65,69],[55,62,67,71],[50,57,62,66]], motif:[76,81,79,84,81,79], density:6, style:'full'},
        {bars:8, prog:[[48,55,60,64],[50,57,62,66],[52,59,64,67]], motif:[72,74,71,69], density:4, style:'quiet'},
        {bars:11,prog:[[53,60,65,69],[55,62,67,71],[57,64,69,72],[52,59,64,67]], motif:[77,81,84,81,79,76], density:6, style:'lift'},
        {bars:10,prog:[[55,62,67,71],[52,59,64,67],[48,55,60,64],[50,57,62,66]], motif:[74,76,79,83,79,76], density:6, style:'warm'},
        {bars:7, prog:[[55,62,67,71],[52,59,64,67],[55,62,67,71]], motif:[79,76,74,71], density:4, style:'quiet'}
      ]
    },
    crossnumber:{
      bpm:112, bars:84,
      sections:[
        {bars:8, prog:[[48,55,60,64],[51,58,63,67]], motif:[72,75,67,70,74,79,70,75], density:8, style:'quiet'},
        {bars:15,prog:[[48,55,60,64],[51,58,63,67],[53,60,65,69],[46,53,58,62]], motif:[72,75,79,70,74,77,69,74], density:8, style:'drive'},
        {bars:15,prog:[[50,57,62,65],[53,60,65,69],[55,62,67,70],[48,55,60,64]], motif:[74,77,81,72,76,79,71,76], density:8, style:'full'},
        {bars:10,prog:[[45,52,57,60],[48,55,60,64],[50,57,62,65]], motif:[69,72,75,71,74], density:5, style:'quiet'},
        {bars:15,prog:[[53,60,65,69],[55,62,67,70],[51,58,63,67],[48,55,60,64]], motif:[77,81,84,75,79,82,74,79], density:8, style:'lift'},
        {bars:13,prog:[[48,55,60,64],[50,57,62,65],[46,53,58,62],[51,58,63,67]], motif:[72,75,79,74,70,77,81,75], density:8, style:'drive'},
        {bars:8, prog:[[48,55,60,64],[51,58,63,67],[48,55,60,64]], motif:[75,72,70,67], density:4, style:'quiet'}
      ]
    },
    ninja:{
      bpm:96, bars:72,
      sections:[
        {bars:8, prog:[[48,55,60,64],[45,52,57,60]], motif:[72,74,76,72], density:4, style:'quiet'},
        {bars:14,prog:[[48,55,60,64],[45,52,57,60],[53,60,65,69],[55,62,67,71]], motif:[72,74,76,79,81,79,76,74], density:8, style:'warm'},
        {bars:14,prog:[[50,57,62,65],[47,54,59,62],[55,62,67,71],[52,59,64,67]], motif:[74,76,79,83,81,79,76,72], density:8, style:'full'},
        {bars:10,prog:[[41,48,53,57],[43,50,55,59],[45,52,57,60]], motif:[65,67,69,72,69,67], density:6, style:'quiet'},
        {bars:14,prog:[[53,60,65,69],[55,62,67,71],[48,55,60,64],[50,57,62,65]], motif:[76,79,81,84,83,81,79,76], density:8, style:'lift'},
        {bars:8, prog:[[48,55,60,64],[53,60,65,69],[45,52,57,60],[55,62,67,71]], motif:[72,76,79,83,81,79,76,74], density:8, style:'full'},
        {bars:4, prog:[[48,55,60,64],[45,52,57,60],[48,55,60,64]], motif:[76,74,72], density:4, style:'quiet'}
      ]
    }
  };

  // Third-generation Recreation themes: energetic enough to support play while
  // keeping the timbre rounded and avoiding the piercing/highly lateral mixes
  // that were previously uncomfortable. These intentionally replace both the
  // original harsh arrangements and the later over-slowed "gentle" versions.
  Object.assign(TRACKS,{
    pairs:{bpm:110,bars:40,sections:[
      {bars:8,prog:[[60,64,67],[57,60,64],[65,69,72],[55,59,62]],motif:[72,76,74,79,76,72,74,71],density:8,style:'warm'},
      {bars:8,prog:[[62,65,69],[59,62,67],[64,67,71],[57,60,64]],motif:[74,77,76,81,79,76,72,74],density:8,style:'drive'},
      {bars:8,prog:[[53,57,60],[55,59,62],[57,60,64]],motif:[69,72,71,74,72,69,67,71],density:8,style:'quiet'},
      {bars:8,prog:[[65,69,72],[60,64,69],[62,65,69],[55,60,64]],motif:[76,79,81,79,76,74,72,74],density:8,style:'lift'},
      {bars:8,prog:[[60,64,67],[57,60,64],[65,69,72],[55,59,62]],motif:[72,74,76,79,76,74,71,67],density:8,style:'full'}]},
    detectword:{bpm:116,bars:40,sections:[
      {bars:8,prog:[[50,57,62],[48,55,60],[53,60,65],[46,53,58]],motif:[69,74,73,71,74,76,71,73],density:8,style:'warm'},
      {bars:8,prog:[[52,59,64],[49,56,61],[55,62,67],[48,55,60]],motif:[71,76,74,73,78,76,74,71],density:8,style:'drive'},
      {bars:8,prog:[[45,52,57],[47,54,59],[48,55,60]],motif:[69,71,73,72,69,71,67,69],density:8,style:'quiet'},
      {bars:8,prog:[[53,60,65],[50,57,62],[55,62,67],[46,53,58]],motif:[74,78,76,73,71,76,79,74],density:8,style:'lift'},
      {bars:8,prog:[[50,57,62],[48,55,60],[53,60,65],[46,53,58]],motif:[74,73,76,71,78,74,76,71],density:8,style:'full'}]},
    make24:{bpm:124,bars:40,sections:[
      {bars:8,prog:[[48,55,60,64],[50,57,62,65],[52,59,64,67],[47,55,59,62]],motif:[60,67,64,72,62,69,65,74],density:8,style:'drive'},
      {bars:8,prog:[[53,60,65,69],[50,57,62,65],[55,62,67,71],[52,59,64,67]],motif:[65,72,69,77,67,74,71,79],density:8,style:'full'},
      {bars:8,prog:[[45,52,57,60],[47,54,59,62],[48,55,60,64]],motif:[57,60,64,67,62,65,69,72],density:8,style:'quiet'},
      {bars:8,prog:[[52,59,64,67],[53,60,65,69],[50,57,62,65],[55,62,67,71]],motif:[64,71,67,76,65,72,69,77],density:8,style:'lift'},
      {bars:8,prog:[[48,55,60,64],[52,59,64,67],[50,57,62,65],[47,55,59,62]],motif:[60,64,67,72,62,65,69,74],density:8,style:'drive'}]},
    trackcoin:{bpm:126,bars:40,sections:[
      {bars:8,prog:[[45,52,57],[43,50,55],[48,55,60],[50,57,62]],motif:[69,72,76,72,71,74,79,74],density:8,style:'drive'},
      {bars:8,prog:[[48,55,60],[46,53,58],[43,50,55],[50,57,62]],motif:[72,76,81,76,74,79,83,79],density:8,style:'full'},
      {bars:8,prog:[[41,48,53],[43,50,55],[45,52,57]],motif:[64,67,69,72,69,67,64,69],density:8,style:'quiet'},
      {bars:8,prog:[[50,57,62],[48,55,60],[46,53,58],[43,50,55]],motif:[76,81,79,74,79,83,81,76],density:8,style:'lift'},
      {bars:8,prog:[[45,52,57],[43,50,55],[48,55,60],[50,57,62]],motif:[69,74,76,72,79,74,81,76],density:8,style:'drive'}]},
    ruleshift:{bpm:122,bars:40,sections:[
      {bars:8,prog:[[48,55,60],[51,58,63],[46,53,58],[49,56,61]],motif:[72,75,67,70,74,65,69,76],density:8,style:'drive'},
      {bars:8,prog:[[50,57,62],[53,60,65],[47,54,59],[51,58,63]],motif:[76,69,65,74,70,75,67,72],density:8,style:'full'},
      {bars:8,prog:[[45,52,57],[48,55,60],[50,57,62]],motif:[67,69,72,70,65,67,64,69],density:8,style:'quiet'},
      {bars:8,prog:[[53,60,65],[49,56,61],[51,58,63],[46,53,58]],motif:[79,72,75,67,74,70,76,69],density:8,style:'lift'},
      {bars:8,prog:[[48,55,60],[46,53,58],[51,58,63],[49,56,61]],motif:[72,67,75,70,65,74,76,69],density:8,style:'drive'}]},
    crossnumber:{bpm:116,bars:40,sections:[
      {bars:8,prog:[[48,55,60,64],[51,58,63,67],[53,60,65,69],[46,53,58,62]],motif:[67,72,75,70,74,77,69,74],density:8,style:'warm'},
      {bars:8,prog:[[50,57,62,65],[53,60,65,69],[55,62,67,70],[48,55,60,64]],motif:[70,74,77,72,76,79,71,76],density:8,style:'drive'},
      {bars:8,prog:[[45,52,57,60],[48,55,60,64],[50,57,62,65]],motif:[69,72,75,71,74,72,69,71],density:8,style:'quiet'},
      {bars:8,prog:[[53,60,65,69],[55,62,67,70],[51,58,63,67],[48,55,60,64]],motif:[72,77,81,75,79,77,74,79],density:8,style:'lift'},
      {bars:8,prog:[[48,55,60,64],[50,57,62,65],[46,53,58,62],[51,58,63,67]],motif:[72,75,79,74,70,77,74,71],density:8,style:'full'}]},
    'block-grid':{bpm:118,bars:40,sections:[
      {bars:8,prog:[[48,55,60],[50,57,62],[45,52,57],[53,60,65]],motif:[60,67,64,69,62,67,65,72],density:8,style:'warm'},
      {bars:8,prog:[[50,57,62],[53,60,65],[48,55,60],[55,62,67]],motif:[62,69,65,72,67,74,69,76],density:8,style:'drive'},
      {bars:8,prog:[[45,52,57],[48,55,60],[43,50,55]],motif:[57,64,60,67,62,65,60,64],density:8,style:'quiet'},
      {bars:8,prog:[[53,60,65],[55,62,67],[50,57,62],[48,55,60]],motif:[65,72,67,74,69,76,72,67],density:8,style:'lift'},
      {bars:8,prog:[[48,55,60],[50,57,62],[53,60,65],[45,52,57]],motif:[60,67,64,72,69,65,62,67],density:8,style:'full'}]},
    'colour-sort':{bpm:114,bars:40,sections:[
      {bars:8,prog:[[50,57,62],[47,54,59],[52,59,64],[55,62,67]],motif:[62,69,66,71,67,74,69,72],density:8,style:'warm'},
      {bars:8,prog:[[54,61,66],[50,57,62],[52,59,64],[47,54,59]],motif:[66,73,69,74,71,76,69,73],density:8,style:'drive'},
      {bars:8,prog:[[47,54,59],[50,57,62],[52,59,64]],motif:[59,66,62,69,64,67,62,66],density:8,style:'quiet'},
      {bars:8,prog:[[54,61,66],[57,64,69],[52,59,64],[55,62,67]],motif:[66,73,69,76,71,78,74,69],density:8,style:'lift'},
      {bars:8,prog:[[50,57,62],[52,59,64],[47,54,59],[55,62,67]],motif:[62,69,64,71,66,73,69,67],density:8,style:'full'}]},
    jigsaw:{bpm:104,bars:40,sections:[
      {bars:8,prog:[[55,62,67],[52,59,64],[48,55,60],[50,57,62]],motif:[67,71,69,74,71,67,64,69],density:8,style:'warm'},
      {bars:8,prog:[[57,64,69],[53,60,65],[55,62,67],[50,57,62]],motif:[69,72,71,76,72,69,67,71],density:8,style:'full'},
      {bars:8,prog:[[48,55,60],[50,57,62],[52,59,64]],motif:[64,67,66,69,67,64,62,66],density:8,style:'quiet'},
      {bars:8,prog:[[53,60,65],[55,62,67],[57,64,69],[52,59,64]],motif:[65,69,72,69,67,71,74,69],density:8,style:'lift'},
      {bars:8,prog:[[55,62,67],[52,59,64],[48,55,60],[50,57,62]],motif:[67,69,71,74,71,69,67,64],density:8,style:'warm'}]}
  });
  // 2026-10-24 consonant major-key replacements for games whose prior
  // arrangements read as tense/off-tone. These use only clear major triads
  // and major-pentatonic melodic material, with lower density and softer voices.
  Object.assign(TRACKS,{
    trackcoin:{bpm:108,bars:40,sections:[
      {bars:8,prog:[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],motif:[60,64,67,69,67,64,62,60],density:8,style:'warm'},
      {bars:8,prog:[[53,57,60],[48,52,55],[55,59,62],[48,52,55]],motif:[65,69,72,69,67,64,62,64],density:8,style:'warm'},
      {bars:8,prog:[[48,52,55],[55,59,62],[53,57,60],[48,52,55]],motif:[60,62,64,67,69,67,64,62],density:8,style:'quiet'},
      {bars:8,prog:[[55,59,62],[53,57,60],[48,52,55],[55,59,62]],motif:[67,69,72,74,72,69,67,64],density:8,style:'lift'},
      {bars:8,prog:[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],motif:[60,64,67,72,69,67,64,60],density:8,style:'warm'}]},
    ruleshift:{bpm:106,bars:40,sections:[
      {bars:8,prog:[[55,59,62],[60,64,67],[62,66,69],[55,59,62]],motif:[67,71,74,76,74,71,69,67],density:8,style:'warm'},
      {bars:8,prog:[[60,64,67],[55,59,62],[62,66,69],[55,59,62]],motif:[72,76,79,76,74,71,69,71],density:8,style:'warm'},
      {bars:8,prog:[[55,59,62],[62,66,69],[60,64,67],[55,59,62]],motif:[67,69,71,74,76,74,71,69],density:8,style:'quiet'},
      {bars:8,prog:[[62,66,69],[60,64,67],[55,59,62],[62,66,69]],motif:[74,76,79,81,79,76,74,71],density:8,style:'lift'},
      {bars:8,prog:[[55,59,62],[60,64,67],[62,66,69],[55,59,62]],motif:[67,71,74,79,76,74,71,67],density:8,style:'warm'}]},
    'block-grid':{bpm:102,bars:40,sections:[
      {bars:8,prog:[[50,54,57],[55,59,62],[57,61,64],[50,54,57]],motif:[62,66,69,71,69,66,64,62],density:8,style:'warm'},
      {bars:8,prog:[[55,59,62],[50,54,57],[57,61,64],[50,54,57]],motif:[67,71,74,71,69,66,64,66],density:8,style:'warm'},
      {bars:8,prog:[[50,54,57],[57,61,64],[55,59,62],[50,54,57]],motif:[62,64,66,69,71,69,66,64],density:8,style:'quiet'},
      {bars:8,prog:[[57,61,64],[55,59,62],[50,54,57],[57,61,64]],motif:[69,71,74,76,74,71,69,66],density:8,style:'lift'},
      {bars:8,prog:[[50,54,57],[55,59,62],[57,61,64],[50,54,57]],motif:[62,66,69,74,71,69,66,62],density:8,style:'warm'}]},
    'colour-sort':{bpm:100,bars:40,sections:[
      {bars:8,prog:[[53,57,60],[58,62,65],[60,64,67],[53,57,60]],motif:[65,69,72,74,72,69,67,65],density:8,style:'warm'},
      {bars:8,prog:[[58,62,65],[53,57,60],[60,64,67],[53,57,60]],motif:[70,74,77,74,72,69,67,69],density:8,style:'warm'},
      {bars:8,prog:[[53,57,60],[60,64,67],[58,62,65],[53,57,60]],motif:[65,67,69,72,74,72,69,67],density:8,style:'quiet'},
      {bars:8,prog:[[60,64,67],[58,62,65],[53,57,60],[60,64,67]],motif:[72,74,77,79,77,74,72,69],density:8,style:'lift'},
      {bars:8,prog:[[53,57,60],[58,62,65],[60,64,67],[53,57,60]],motif:[65,69,72,77,74,72,69,65],density:8,style:'warm'}]}
  });
  // 2026-10-24 low-fatigue themes for the four remaining bright/dense games.
  // Major triads + major-pentatonic contours, restrained register and fewer
  // melodic events keep long sessions consonant without becoming inert.
  Object.assign(TRACKS,{
    pairs:{bpm:92,bars:40,sections:[
      {bars:8,prog:[[48,52,55],[53,57,60],[55,59,62],[48,52,55]],motif:[60,64,67,64],density:4,style:'warm'},
      {bars:8,prog:[[53,57,60],[48,52,55],[55,59,62],[48,52,55]],motif:[65,67,69,67,64,62],density:6,style:'warm'},
      {bars:8,prog:[[48,52,55],[55,59,62],[53,57,60]],motif:[60,62,64,67],density:4,style:'quiet'},
      {bars:8,prog:[[55,59,62],[53,57,60],[48,52,55]],motif:[67,69,72,69,67,64],density:6,style:'warm'},
      {bars:8,prog:[[48,52,55],[53,57,60],[48,52,55]],motif:[60,64,67,64],density:4,style:'quiet'}]},
    detectword:{bpm:94,bars:40,sections:[
      {bars:8,prog:[[50,54,57],[55,59,62],[57,61,64],[50,54,57]],motif:[62,66,69,66],density:4,style:'warm'},
      {bars:8,prog:[[55,59,62],[50,54,57],[57,61,64],[50,54,57]],motif:[67,69,71,69,66,64],density:6,style:'warm'},
      {bars:8,prog:[[50,54,57],[57,61,64],[55,59,62]],motif:[62,64,66,69],density:4,style:'quiet'},
      {bars:8,prog:[[57,61,64],[55,59,62],[50,54,57]],motif:[69,71,74,71,69,66],density:6,style:'warm'},
      {bars:8,prog:[[50,54,57],[55,59,62],[50,54,57]],motif:[62,66,69,66],density:4,style:'quiet'}]},
    make24:{bpm:96,bars:40,sections:[
      {bars:8,prog:[[48,52,55],[55,59,62],[53,57,60],[48,52,55]],motif:[60,64,67,64],density:4,style:'warm'},
      {bars:8,prog:[[55,59,62],[53,57,60],[48,52,55],[55,59,62]],motif:[67,69,72,69,67,64],density:6,style:'warm'},
      {bars:8,prog:[[48,52,55],[53,57,60],[55,59,62]],motif:[60,62,64,67],density:4,style:'quiet'},
      {bars:8,prog:[[53,57,60],[55,59,62],[48,52,55]],motif:[65,67,69,72,69,67],density:6,style:'warm'},
      {bars:8,prog:[[48,52,55],[55,59,62],[48,52,55]],motif:[60,64,67,64],density:4,style:'quiet'}]},
    crossnumber:{bpm:90,bars:40,sections:[
      {bars:8,prog:[[53,57,60],[58,62,65],[60,64,67],[53,57,60]],motif:[65,69,72,69],density:4,style:'warm'},
      {bars:8,prog:[[58,62,65],[53,57,60],[60,64,67],[53,57,60]],motif:[70,72,74,72,69,67],density:6,style:'warm'},
      {bars:8,prog:[[53,57,60],[60,64,67],[58,62,65]],motif:[65,67,69,72],density:4,style:'quiet'},
      {bars:8,prog:[[60,64,67],[58,62,65],[53,57,60]],motif:[72,74,77,74,72,69],density:6,style:'warm'},
      {bars:8,prog:[[53,57,60],[58,62,65],[53,57,60]],motif:[65,69,72,69],density:4,style:'quiet'}]}
  });
  var SOFT_TIMBRE_GAMES = new Set(['pairs','detectword','make24','trackcoin','ruleshift','block-grid','colour-sort','jigsaw','crossnumber']);

  function sectionAt(track, bar){
    var cursor = 0;
    for(var i=0;i<track.sections.length;i++){
      var section = track.sections[i];
      if(bar < cursor + section.bars) return { section:section, local:bar-cursor, index:i };
      cursor += section.bars;
    }
    return { section:track.sections[track.sections.length-1], local:0, index:track.sections.length-1 };
  }

  function tinyHuman(bar, step){
    var x = Math.sin((bar + 1) * 12.9898 + (step + 1) * 78.233) * 43758.5453;
    return (x - Math.floor(x) - 0.5) * 0.018;
  }

  function scheduleBar(track, bar, start){
    var beat = 60 / track.bpm;
    var info = sectionAt(track, bar);
    var sec = info.section;
    var chordNotes = sec.prog[info.local % sec.prog.length];
    var full = sec.style === 'full' || sec.style === 'drive' || sec.style === 'lift';
    var quiet = sec.style === 'quiet';
    var isJigsaw = activeGame === 'jigsaw';
    var isColourSort = activeGame === 'colour-sort';
    var isBlockGrid = activeGame === 'block-grid';
    var isCrossnumber = activeGame === 'crossnumber';
    var softTimbre = SOFT_TIMBRE_GAMES.has(activeGame);

    chordNotes.forEach(function(n, idx){
      var padLevel = quiet ? 0.017 : 0.022;
      if(isJigsaw) padLevel *= 0.92;
      if(isColourSort) padLevel *= 0.96;
      if(softTimbre) padLevel *= 0.82;
      makeVoice('pad', n, start + idx * 0.012, beat * 3.92, padLevel, softTimbre ? 0 : (idx - 1) * 0.22);
    });

    if(sec.style !== 'quiet'){
      var bassLevel = isJigsaw ? 0.008 : (isColourSort ? 0.010 : (isBlockGrid ? 0.011 : 0.014));
      makeVoice('bass', chordNotes[0] - 12, start, beat * 1.8, bassLevel, 0);
      makeVoice('bass', chordNotes[0] - 12, start + beat * 2, beat * 1.75, bassLevel * 0.82, 0);
    }

    var steps = sec.density;
    var stepDur = beat * 4 / steps;
    for(var k=0;k<steps;k++){
      var pitch = sec.motif[(bar * steps + k) % sec.motif.length];
      if(sec.style === 'lift' && (k === 2 || k === Math.max(3, steps-2))) pitch += 12;

      var kind;
      if(softTimbre) kind = k % 3 === 0 ? 'mallet' : 'lead';
      else if(activeGame === 'detectword' || isCrossnumber) kind = k % 4 === 3 ? 'lead' : 'mallet';
      else if(activeGame === 'trackcoin' || isBlockGrid) kind = k % 3 === 0 ? 'mallet' : 'lead';
      else if(isColourSort) kind = k % 2 === 0 ? 'mallet' : 'lead';
      else if(isJigsaw) kind = k % 3 === 0 ? 'mallet' : 'lead';
      else kind = k % 3 === 0 ? 'mallet' : 'lead';

      var voiceLevel = quiet ? 0.014 : 0.019;
      if(isJigsaw) voiceLevel *= 0.78;
      if(isColourSort) voiceLevel *= 0.90;
      if(softTimbre) voiceLevel *= 0.78;
      if(softTimbre) pitch = Math.min(pitch, 76);
      makeVoice(kind, pitch, start + k * stepDur + tinyHuman(bar,k), Math.min(stepDur * 0.76, beat * 0.44), voiceLevel, softTimbre ? 0 : (k % 2 ? 0.18 : -0.18));
    }

    if(isJigsaw){
      if(!quiet && bar % 2 === 0) kick(start, 0.006);
      return;
    }

    if(isColourSort){
      if(full){
        kick(start, 0.016);
        if(sec.style === 'lift') kick(start + beat * 2, 0.011);
        for(var c=0;c<4;c++) tick(start + (c + 0.5) * beat + tinyHuman(bar,c), 0.0018);
      }else if(sec.style === 'warm' && bar % 2 === 0){
        kick(start, 0.010);
      }
      return;
    }

    if(isCrossnumber){
      if(full){
        kick(start, sec.style === 'drive' ? 0.024 : 0.019);
        kick(start + beat * 2, 0.014);
      }
      for(var x=0;x<4;x++) tick(start + x * beat + tinyHuman(bar,x), quiet ? 0.0022 : 0.0036);
      return;
    }

    if(full){
      kick(start, sec.style === 'drive' ? (isBlockGrid ? 0.022 : 0.030) : 0.024);
      kick(start + beat * 2, isBlockGrid ? 0.014 : 0.018);
      for(var q=0;q<4;q++) tick(start + (q + 0.5) * beat + tinyHuman(bar,q), isBlockGrid ? 0.0020 : 0.0036);
    }else if(sec.style === 'warm' && bar % 2 === 0){
      kick(start, 0.018);
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
      if(host.parentElement !== playWindow) playWindow.appendChild(host);
      var specifics = root.querySelector('.game-specific-actions');
      if(specifics){
        Array.prototype.slice.call(specifics.children).forEach(function(control){
          if(control.matches('button.action') && control.parentElement !== host) host.appendChild(control);
        });
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