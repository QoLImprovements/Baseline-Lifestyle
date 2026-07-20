const { test, expect } = require('@playwright/test');

const planPayload={
  ok:true,
  hasPlan:true,
  planId:91,
  planJson:{version:6,startDate:'2026-07-01',frequency:'3x',sessions:1,lengthMode:'sessions',days:[],timerStartDelay:1,items:[{exercise:'Knee Push-Ups',baseline:14,sets:2,progressionType:'standard-reps'}]},
  sessions:[{session_index:1,scheduled_date:'2026-07-01',status:'planned',completed_at:null,updated_at:0}],
  progress:{done:0,total:1,nextIndex:1,startDate:'2026-07-01'}
};

test('voice workout can be started without clicking between exercises',async({page})=>{
  await page.addInitScript(()=>{
    window.__recognizers=[];
    class RecognitionMock{
      constructor(){
        this.continuous=true;
        this.interimResults=false;
        this.maxAlternatives=3;
        this.started=false;
        window.__recognizers.push(this);
      }
      start(){ this.started=true; setTimeout(()=>this.onstart&&this.onstart(),0); }
      abort(){ this.started=false; setTimeout(()=>this.onend&&this.onend(),0); }
      stop(){ this.abort(); }
      emit(primary,alternatives=[],isFinal=false){
        const result=[primary,...alternatives].map((transcript,index)=>({transcript,confidence:index?0.92:0.35}));
        result.isFinal=isFinal;
        this.onresult&&this.onresult({resultIndex:0,results:[result]});
      }
    }
    window.SpeechRecognition=RecognitionMock;
    window.webkitSpeechRecognition=RecognitionMock;
    window.speechSynthesis={
      getVoices:()=>[],
      speak:utterance=>setTimeout(()=>utterance.onend&&utterance.onend(),0),
      cancel:()=>{},
      addEventListener:()=>{}
    };
    window.SpeechSynthesisUtterance=function(text){ this.text=text; };
    Object.defineProperty(navigator,'mediaDevices',{configurable:true,value:{getUserMedia:async()=>({getTracks:()=>[{stop(){}}]})}});
    localStorage.setItem('__baseline_voice_settings_v1__',JSON.stringify({enabled:true,spokenResponses:true,language:'en-GB',maximumRestSeconds:150}));
  });
  await page.route('**/sitewide/api/me.php',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,authed:true,name:'Voice Tester',user:{name:'Voice Tester'}})}));
  await page.route('**/systems/baseline-fitness/api/get_plan.php',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(planPayload)}));
  await page.route('**/sitewide/api/voice_settings.php',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,found:false,settings:null})}));

  await page.goto('/baseline-fitness/my-plan',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(window.BASELINE_fitnessWorkout&&window.BASELINE_voice&&window.BASELINE_fitnessVoice));
  await expect(page.locator('#startVoiceWorkoutBtn')).toBeVisible();
  await page.locator('#startVoiceWorkoutBtn').click();
  await expect(page.locator('#voiceWorkoutModal')).toBeVisible();
  await expect(page.locator('#voiceWorkoutPrompt')).toContainText('Begin');
  await expect(page.locator('#voiceExerciseName')).toContainText('Knee Push-Ups');
  await page.waitForFunction(()=>window.__recognizers?.some(recognizer=>recognizer.started));

  // The browser's first interim hypothesis is wrong, but a lower-ranked
  // alternative contains the expected command. It must be accepted immediately.
  await page.evaluate(()=>{
    const recognizer=[...window.__recognizers].reverse().find(item=>item.started);
    recognizer.emit('the gym',['begin'],false);
  });

  await expect.poll(()=>page.evaluate(()=>window.BASELINE_fitnessVoice.state())).toBe('awaiting_result');
  await expect(page.locator('#voiceWorkoutPrompt')).toContainText('Success or Fail');
});
