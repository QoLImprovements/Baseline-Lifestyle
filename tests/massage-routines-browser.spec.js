const {test,expect}=require('@playwright/test');

async function openRoutine(page){
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#routines')).toHaveClass(/active/);
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
}

test('unselected Massage Routines card fills mobile width instead of shrinking around dropdown',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
  const rects=await page.evaluate(()=>{
    const section=document.getElementById('routines').getBoundingClientRect();
    const card=document.querySelector('#routines .massage-routines-card').getBoundingClientRect();
    const dropdown=document.querySelector('#routines .routine-visible-select').getBoundingClientRect();
    return {viewport:window.innerWidth,sectionWidth:section.width,cardWidth:card.width,dropdownWidth:dropdown.width};
  });
  expect(rects.cardWidth).toBeGreaterThan(rects.viewport*0.83);
  expect(rects.cardWidth).toBeGreaterThan(rects.sectionWidth*0.88);
  expect(rects.dropdownWidth).toBeGreaterThan(rects.cardWidth*0.80);
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await page.locator('#massageRoutineSelect').selectOption('partner-full-body-60');
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await expect(page).toHaveURL(/massage-plan=partner-full-body-60/);
});

test('one active procedure only: area and technique family appear once, variation and details once',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  const rows=page.locator('#massageRoutineTimeline .routine-section-row');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Chest & Shoulders');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Pectorals — Effleurage');
  await expect(rows.first()).toContainText('Bilateral longitudinal palms');
  await expect(rows.first()).toContainText('Pressure 3–4/10');
  await expect(rows.first()).not.toContainText('Effleurage');
  await expect(rows.first()).not.toContainText('Upper Pectorals');
  await expect(rows.first()).not.toContainText('Done');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('01:00');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('01:00');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Bilateral muscle lifting');
  await expect(rows.first()).not.toContainText('Bilateral longitudinal palms');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 2 of 18');
  await page.locator('#massageRoutinePreviousProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
});

test('select any procedure, exact remaining time, automatic advance, pause and reset',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const list=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(list).toHaveCount(9);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(80);
  await list.first().locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:05');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Pectoral — Petrissage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-row')).toHaveCount(1);
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Small-circle kneading');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:50');
  await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toContainText('Left shoulder outward 30–90°');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(50000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:55');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 7 of 18');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Shoulder — Assisted Stretching');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:05');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:55');
  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(page.locator('#massageRoutineTimeline .routine-section-row')).toHaveCount(1);
});

test('navigation moves among nine anatomical steps and preserves upper-arm/forearm work',async({page})=>{
  await openRoutine(page);
  await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('14:00');
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Upper Arms & Forearms');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Upper Arm — Petrissage');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('15:30');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Forearm & Hand — Petrissage');
  await page.locator('#massageRoutinePrevious').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Chest & Shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await page.locator('#massageRoutineFullDetails summary').click();
  const step0=page.locator('#massageRoutineFullList .routine-full-step').first();
  await step0.locator('.routine-full-procedures li').nth(14).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('10:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Front Shoulder — Petrissage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Anterior-deltoid lifting');
});

test('face-down back section includes thumb walking and tapotement',async({page})=>{
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const full=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(full).toHaveCount(9);
  await expect(full.nth(5)).toContainText('Finger crawling with thumb walking');
  await expect(full.nth(5)).toContainText('Cupping');
  await full.nth(5).locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Back — Tapotement');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Cupping');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:20');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Beating (loose fist)');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:40');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Hacking');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('41:00');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Fingertip tapping');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('41:15');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Back — Vibration');
});

test('minimal fullscreen preserves clock and one concise procedure, full list remains accessible',async({page})=>{
  await page.clock.install();
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await expect(player).toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineMinimalClock')).toBeVisible();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Pectorals — Effleurage');
  await expect(page.locator('#massageRoutineMinimalTechnique')).toHaveText('Bilateral longitudinal palms');
  await expect(page.locator('#massageRoutineMinimalPressure')).toHaveText('Pressure 3–4/10');
  await expect(page.locator('#massageRoutineTimeline')).toBeHidden();
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).toHaveClass(/routine-fullscreen/);
  const size=await page.evaluate(()=>{
    const dial=document.getElementById('massageRoutineMinimalClock');
    const digits=document.getElementById('massageRoutineMinimalTime');
    return {dial:dial.getBoundingClientRect().width,digits:parseFloat(getComputedStyle(digits).fontSize)};
  });
  expect(size.dial).toBeGreaterThan(250);
  expect(size.digits).toBeGreaterThanOrEqual(68);
  const full=page.locator('#massageRoutineFullDetails');
  await expect(full.locator('summary')).toBeVisible();
  await full.locator('summary').click();
  await expect(page.locator('#massageRoutineFullList .routine-full-step')).toHaveCount(9);
  await full.locator('summary').click();
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).not.toHaveClass(/routine-fullscreen/);
});

test('mobile windowed page scrolls naturally and active procedure panel has no internal scrollbar',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  const stats=await page.evaluate(()=>{
    const card=document.querySelector('#routines .massage-routines-card');
    const list=document.getElementById('massageRoutineTimeline');
    const runner=document.getElementById('massageRoutineRunner');
    return {
      cardWidth:card.getBoundingClientRect().width,
      viewport:innerWidth,
      overflow:getComputedStyle(list).overflowY,
      playerOverflow:getComputedStyle(runner).overflowY,
      internalHeight:list.scrollHeight,
      clientHeight:list.clientHeight,
      total:document.documentElement.scrollHeight
    };
  });
  expect(stats.cardWidth).toBeGreaterThan(stats.viewport*0.83);
  expect(stats.overflow).toBe('visible');
  expect(stats.playerOverflow).toBe('visible');
  expect(stats.internalHeight).toBeLessThanOrEqual(stats.clientHeight+2);
  // The actual routine may fit on a tall phone. Test ordinary page scrolling
  // with additional content rather than requiring artificial overflow.
  await page.evaluate(()=>{
    const spacer=document.createElement('div');
    spacer.id='massage-scroll-regression-spacer';
    spacer.style.height='520px';
    document.body.append(spacer);
  });
  await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollHeight)).toBeGreaterThan(844);
  await page.evaluate(()=>scrollTo(0,350));
  await expect.poll(()=>page.evaluate(()=>scrollY)).toBeGreaterThan(100);
  await page.evaluate(()=>document.getElementById('massage-scroll-regression-spacer')?.remove());
});

test('routine URL selection remains independent of planner after refresh',async({page})=>{
  await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
  await page.locator('#massageRoutineSelect').selectOption('partner-full-body-60');
  await expect(page).toHaveURL(/massage-plan=partner-full-body-60/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await page.locator('.tab[data-target="planner"]').click();
  await expect(page.locator('#planner')).toHaveClass(/active/);
  await page.locator('.tab[data-target="routines"]').click();
  await expect(page.locator('#routines')).toHaveClass(/active/);
});


test('firm petrissage and gentler integrated stretches have separate pressure and intensity displays',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  const details=page.locator('#massageRoutineFullDetails');
  await details.locator('summary').click();
  const steps=page.locator('#massageRoutineFullList .routine-full-step');
  await steps.first().locator('.routine-full-procedures li').nth(2).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Pectoral — Petrissage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-pressure')).toHaveText('Pressure 4–6/10');
  await details.locator('summary').click();
  await steps.nth(2).locator('.routine-full-procedures li').first().getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Quadriceps — Petrissage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-pressure')).toHaveText('Pressure 5–7/10');
  await details.locator('summary').click();
  await steps.nth(3).locator('.routine-full-procedures li').nth(1).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Hamstring — Assisted Stretching');
  await expect(page.locator('#massageRoutineTimeline .routine-section-pressure')).toBeHidden();
  await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toContainText('2–3/10');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:08');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Hamstring & Calf — Petrissage');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:52');
  await expect(page.locator('#massageRoutineTimeline .routine-section-pressure')).toHaveText('Pressure 3–4/10');
  await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toContainText('2–3/10');
});

test('both chest openings are brief; sustained treatment advances to petrissage and friction',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const chest=page.locator('#massageRoutineFullList .routine-full-step').first();
  await chest.locator('.routine-full-procedures li').nth(4).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Pectoral — Assisted Stretching');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:05');
  await expect(page.locator('#massageRoutineMinimalInstruction')).toContainText('gentle, continuous support');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:05');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:50');
  await expect(page.locator('#massageRoutineMinimalInstruction')).toContainText('lighter pressure than on relaxed tissue');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:55');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:05');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('07:00');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:05');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('07:05');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:55');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Pectoral — Friction');
  await expect(page.locator('#massageRoutineMinimalTechnique')).toHaveText('Localised circular');
  await expect(page.locator('#massageRoutineTimeline .routine-section-pressure')).toHaveText('Pressure 3–4/10');

  await page.locator('#massageRoutineFullDetails summary').click();
  await chest.locator('.routine-full-procedures li').nth(9).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('08:00');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:05');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:50');
});


test('opening both pectorals avoids repeating already-completed effleurage',async({page})=>{
  await openRoutine(page);
  const list=page.locator('#massageRoutineFullDetails');
  await list.locator('summary').click();
  const first=page.locator('#massageRoutineFullList .routine-full-step').first();
  for(const offset of [4,9]){
    const sequence=first.locator('.routine-full-procedures li');
    await expect(sequence.nth(offset)).toContainText('Assisted Stretching');
    await expect(sequence.nth(offset+1)).toContainText('Petrissage');
    await expect(sequence.nth(offset+4)).toContainText('Friction');
    for(let p=offset;p<=offset+4;p++){
      await expect(sequence.nth(p)).not.toContainText('Effleurage');
    }
    await sequence.nth(offset+4).getByRole('button',{name:/Start here/}).click();
    await expect(page.locator('#massageRoutineMinimalName')).toContainText('Friction');
    await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Localised circular');
    await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toContainText('30–90°');
    await list.locator('summary').click();
  }
  await expect(first.locator('.routine-full-procedures li')).toHaveCount(18);
});


test('full routine uses all four brief tapotement methods on upper-back muscle',async({page})=>{
  await openRoutine(page);
  const details=page.locator('#massageRoutineFullDetails');
  await details.locator('summary').click();
  const upperBack=page.locator('#massageRoutineFullList .routine-full-step').nth(5);
  const four=upperBack.locator('.routine-full-procedures li').filter({hasText:'Tapotement'});
  await expect(four).toHaveCount(4);
  const techniques=['Cupping','Beating (loose fist)','Hacking','Fingertip tapping'];
  const starts=['40:00','40:20','40:40','41:00'];
  for(let i=0;i<4;i++){
    await expect(four.nth(i)).toContainText(techniques[i]);
    await expect(four.nth(i)).toContainText('Upper Back — Tapotement');
    await four.nth(i).getByRole('button',{name:/Start here/}).click();
    await expect(page.locator('#massageRoutineElapsed')).toHaveText(starts[i]);
    await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText(techniques[i]);
    if(i<3)await details.locator('summary').click();
  }
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:15');
  await details.locator('summary').click();
  await expect(upperBack).toContainText('Vibration');
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(80);
});

test('supported hamstring and quadriceps work progresses beyond repeated effleurage',async({page})=>{
  await openRoutine(page);
  const details=page.locator('#massageRoutineFullDetails');
  await details.locator('summary').click();
  const list=page.locator('#massageRoutineFullList .routine-full-step');
  for(const [step,offsets] of [[3,[2,4,8,10]],[7,[2,4,8,10]]]){
    const items=list.nth(step).locator('.routine-full-procedures li');
    for(const [i,position] of offsets.entries()){
      await expect(items.nth(position)).toContainText(i%2===0?'Petrissage':'Friction');
      await expect(items.nth(position)).not.toContainText('Effleurage');
    }
  }
  const back=list.nth(5);
  await expect(back.locator('.routine-full-procedures li').first()).toContainText('Effleurage');
  await expect(back.locator('.routine-full-procedures li').nth(1)).toContainText('Petrissage');
  await expect(back.locator('.routine-full-procedures li').nth(2)).toContainText('Friction');
});


test('quadriceps tapotement progresses from petrissage into cupping and hacking on each side',async({page})=>{
  await openRoutine(page);
  const full=page.locator('#massageRoutineFullDetails');
  await full.locator('summary').click();
  const thigh=page.locator('#massageRoutineFullList .routine-full-step').nth(2);
  await expect(thigh.locator('.routine-full-procedures li')).toHaveCount(8);
  const cases=[
    {index:1,time:'21:00',area:'Right Quadriceps',type:'Cupping'},
    {index:2,time:'21:15',area:'Right Quadriceps',type:'Hacking'},
    {index:5,time:'24:00',area:'Left Quadriceps',type:'Cupping'},
    {index:6,time:'24:15',area:'Left Quadriceps',type:'Hacking'},
  ];
  for(const [i,c] of cases.entries()){
    await thigh.locator('.routine-full-procedures li').nth(c.index).getByRole('button',{name:/Start here/}).click();
    await expect(page.locator('#massageRoutineElapsed')).toHaveText(c.time);
    await expect(page.locator('#massageRoutineMinimalName')).toHaveText(c.area+' — Tapotement');
    await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText(c.type);
    await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:15');
    if(i!==cases.length-1)await full.locator('summary').click();
  }
});

test('gluteal and hamstring percussion is balanced left/right after kneading, not during leg stretch',async({page})=>{
  await openRoutine(page);
  const full=page.locator('#massageRoutineFullDetails');
  await full.locator('summary').click();
  const posterior=page.locator('#massageRoutineFullList .routine-full-step').nth(6);
  await expect(posterior.locator('.routine-full-procedures li')).toHaveCount(10);
  const cases=[
    {index:1,time:'47:55',area:'Right Glute',type:'Cupping',seconds:'00:20'},
    {index:2,time:'48:15',area:'Right Glute',type:'Beating (loose fist)',seconds:'00:15'},
    {index:4,time:'49:25',area:'Left Glute',type:'Cupping',seconds:'00:20'},
    {index:5,time:'49:45',area:'Left Glute',type:'Beating (loose fist)',seconds:'00:15'},
    {index:7,time:'52:10',area:'Right Hamstring',type:'Cupping',seconds:'00:20'},
    {index:9,time:'54:40',area:'Left Hamstring',type:'Cupping',seconds:'00:20'}
  ];
  for(const [i,c] of cases.entries()){
    await posterior.locator('.routine-full-procedures li').nth(c.index).getByRole('button',{name:/Start here/}).click();
    await expect(page.locator('#massageRoutineElapsed')).toHaveText(c.time);
    await expect(page.locator('#massageRoutineMinimalName')).toHaveText(c.area+' — Tapotement');
    await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText(c.type);
    await expect(page.locator('#massageRoutineSectionClock')).toHaveText(c.seconds);
    await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toBeHidden();
    if(i!==cases.length-1)await full.locator('summary').click();
  }
  await full.locator('summary').click();
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(80);
});




for(const viewport of [{width:1440,height:900},{width:1024,height:768},{width:390,height:844}]){
  test('Massage Routines card equals System card width at '+viewport.width+'px',async({page})=>{
    await page.setViewportSize(viewport);
    await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
    await expect(page.locator('#routines')).toHaveClass(/active/);
    const routine=await page.locator('#routines .massage-routines-card').boundingBox();
    const dropdown=await page.locator('#routines .routine-visible-select').boundingBox();
    expect(routine).not.toBeNull();
    expect(dropdown).not.toBeNull();
    await page.locator('.tab[data-target="system"]').click();
    await expect(page.locator('#system')).toHaveClass(/active/);
    const system=await page.locator('#system .system-card').boundingBox();
    expect(system).not.toBeNull();
    expect(Math.abs(routine.width-system.width)).toBeLessThanOrEqual(2);
    expect(Math.abs(routine.x-system.x)).toBeLessThanOrEqual(2);
    expect(dropdown.width).toBeGreaterThan(200);
    expect(routine.width).toBeGreaterThan(dropdown.width);
    await page.locator('.tab[data-target="routines"]').click();
    await expect(page.locator('#routines .massage-routines-card')).toBeVisible();
    const routineAfter=await page.locator('#routines .massage-routines-card').boundingBox();
    expect(Math.abs(routineAfter.width-system.width)).toBeLessThanOrEqual(2);
  });
}

test('player uses System page inner surface colours and shared tab/button palette',async({page})=>{
  await page.setViewportSize({width:1440,height:900});
  await openRoutine(page);
  const actual=await page.evaluate(()=>{
    const style=el=>getComputedStyle(el);
    const systemList=document.querySelector('#system .system-list');
    const systemNote=document.querySelector('#system .system-note-block');
    const systemTab=document.querySelector('.tab[data-target="system"]');
    const runner=document.getElementById('massageRoutineRunner');
    const step=document.querySelector('#routines .routine-current-step');
    const procedure=document.querySelector('#routines .routine-section-row.is-live');
    const arrow=document.querySelector('#massageRoutineNextProcedure');
    return {
      systemList:style(systemList).backgroundColor,
      systemNote:style(systemNote).backgroundColor,
      step:style(step).backgroundColor,
      procedure:style(procedure).backgroundColor,
      controls:style(arrow).backgroundImage,
      systemControls:style(systemTab).backgroundImage,
      arrowColor:style(arrow).color,
      arrowTextFill:style(arrow).webkitTextFillColor,
      className:runner.className
    };
  });
  expect(actual.step).toBe(actual.systemList);
  expect(actual.procedure).toBe(actual.systemNote);
  expect(actual.controls).toBe(actual.systemControls);
  expect(actual.arrowColor).toBe('rgb(31, 16, 7)');
  expect(actual.arrowTextFill).toBe('rgb(31, 16, 7)');
});
