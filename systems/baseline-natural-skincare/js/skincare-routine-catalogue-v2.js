/* Baseline Personal Care — comprehensive self-care catalogue and routine fields. */
(function (global) {
  'use strict';

  const CORE = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  if (!CORE || global.__BASELINE_SKINCARE_ROUTINE_CATALOGUE_V2__) return;
  global.__BASELINE_SKINCARE_ROUTINE_CATALOGUE_V2__ = true;

  const EXTRA_GROUPS = Object.freeze([
    'Bathing & Personal Hygiene',
    'Hair & Scalp Care',
    'Beard & Facial-Hair Care',
    'Oral Care',
    'Nail & Grooming Care'
  ]);

  const SHAVING_METHODS = Object.freeze([
    { value: 'wet-cartridge', label: 'Wet shave — cartridge razor' },
    { value: 'wet-safety', label: 'Wet shave — safety razor' },
    { value: 'wet-straight', label: 'Wet shave — straight razor / shavette' },
    { value: 'electric-foil', label: 'Electric shave — foil shaver' },
    { value: 'electric-rotary', label: 'Electric shave — rotary shaver' },
    { value: 'electric-wet-dry', label: 'Electric shave — wet-and-dry shaver' },
    { value: 'trimmer', label: 'Trim — beard / body trimmer' },
    { value: 'clipper', label: 'Clip — hair clippers' },
    { value: 'body-razor', label: 'Body shave — manual razor' },
    { value: 'dermaplaning', label: 'Facial dermaplaning razor' }
  ]);

  const GROUP_TEXT = Object.freeze({
    'Cleansing': {
      mechanism: 'Cleansing works by loosening and carrying away material that has accumulated on the surface, but the solvent, surfactant level and removal method determine how much natural lipid is also removed.',
      practice: 'The amount used, massage time, water temperature and cloth pressure should therefore be recorded as part of the step rather than treating every cleanse as equivalent.',
      limits: 'A cleanser cannot permanently change pore size or “detox” the skin, and a method that leaves persistent residue, tightness, stinging or congestion may need a different product, removal method or frequency.'
    },
    'Preparation, Mists & Toning': {
      mechanism: 'Preparation steps mainly alter surface water, temperature or slip for a limited period; they do not replace cleansing, moisturising or a targeted treatment.',
      practice: 'Their value is in making the following compatible step easier to spread, more comfortable or more repeatable, so placement in the sequence matters.',
      limits: 'More layers are not automatically better, and fragrance, heat, repeated wiping or incompatible ingredients can add irritation without adding a meaningful benefit.'
    },
    'Hydration & Barrier': {
      mechanism: 'Hydration steps add water-binding ingredients, emollients or occlusive material to improve softness, flexibility and the feeling of reduced tightness at the outer skin layers.',
      practice: 'Humectant layers generally work best when followed by an appropriate moisturising or sealing layer, with quantity adjusted for humidity, body area and the products underneath.',
      limits: 'A rich finish can reduce water loss but may feel heavy or trap unwanted residue, while a water-only layer may evaporate quickly; comfort and repeatable skin response are the useful guides.'
    },
    'Serums & Active Ingredients': {
      mechanism: 'An active step is defined by its ingredient, concentration, vehicle and contact pattern rather than by the word “serum”; those variables determine both intended effect and irritation potential.',
      practice: 'Recording strength, amount, treated area and exact days makes it possible to identify which active is helping or causing dryness instead of changing several variables together.',
      limits: 'Results are gradual and variable, and increasing frequency beyond tolerance can reduce consistency through irritation; prescription directions and professional advice take priority where applicable.'
    },
    'Exfoliation': {
      mechanism: 'Exfoliation changes how retained surface cells are loosened or removed, either through acids, enzymes, keratolytic ingredients or physical friction.',
      practice: 'Method, strength, contact time and spacing should be visible in the plan because two exfoliating steps used close together can create more total load than either label suggests.',
      limits: 'Exfoliation cannot safely be accelerated without limit; persistent burning, rawness, scaling or increased sensitivity indicate that the intensity or frequency is exceeding tolerance.'
    },
    'Devices — Light, Heat & Energy': {
      mechanism: 'These devices deliver a controlled physical input such as light, heat, radiofrequency or ultrasound; the intended effect depends on wavelength, energy, contact, dose and the specific device design.',
      practice: 'The plan should record the exact device, preparation product, treatment area and session spacing so use remains consistent with the manufacturer’s instructions.',
      limits: 'A device category name does not guarantee the same output or evidence across products, and contraindications, eye protection, heat sensation and professional restrictions must be respected.'
    },
    'Devices — Electrical & Conductive': {
      mechanism: 'Electrical facial devices depend on stable skin contact and an appropriate conductive medium so current travels through the intended interface rather than producing intermittent drag or sharp sensation.',
      practice: 'Intensity, electrode placement, gel wetness and pass pattern should be repeatable, while left and right treatment areas should receive comparable attention unless the device instructs otherwise.',
      limits: 'Tingling, zapping, broken skin, incompatible implants or listed medical contraindications require caution; the device manual remains the authority for safe use.'
    },
    'Devices — Mechanical, Suction & Cooling': {
      mechanism: 'Mechanical and suction tools act through pressure, friction, vibration, vacuum or cooling rather than through a topical ingredient.',
      practice: 'Cleaning the contact surface and controlling pressure, dwell time and number of passes are central to making the step repeatable rather than abrasive.',
      limits: 'Bruising, broken capillaries, persistent redness or soreness are signs that contact is too strong or too frequent, and damaged or inflamed skin should not be repeatedly worked.'
    },
    'Professional Treatments': {
      mechanism: 'Professional procedures use equipment, concentrations or controlled injury levels that are not equivalent to an ordinary home routine step.',
      practice: 'The useful planning information is the treatment date, provider instructions, recovery window and which home actives or devices must pause before and after it.',
      limits: 'The practitioner’s assessment and aftercare instructions take priority; the routine log should support coordination, not reinterpret a clinical treatment protocol.'
    },
    'Massage & Manual Care': {
      mechanism: 'Manual care provides pressure, movement and sensory input while the chosen lubricant reduces friction across the skin or hair.',
      practice: 'Direction, pressure, duration and glide product determine whether the session feels calming and controlled or becomes repetitive pulling.',
      limits: 'Massage does not permanently reshape tissue, and pain, bruising, inflamed skin or excessive friction are reasons to reduce pressure, change technique or pause.'
    },
    'Shaving & Hair Removal': {
      mechanism: 'Hair removal changes the hair at or below the skin surface, while preparation and lubrication determine how much friction reaches the surrounding skin.',
      practice: 'The method, blade or device condition, direction of passes, treated area and aftercare should be logged because they strongly affect irritation and ingrown-hair risk.',
      limits: 'Repeated passes, blunt blades, excessive pressure or hair removal over already irritated skin can outweigh the benefit of a closer result.'
    },
    'Body, Hand & Foot Care': {
      mechanism: 'Body care applies the same hydration, emollient, keratolytic and friction-management principles across larger or higher-pressure areas.',
      practice: 'Hands, heels, elbows and other sites may need different product textures and frequencies, so the treated area should be part of the entry.',
      limits: 'Deep cracks, infection, marked swelling or persistent pain are not routine cosmetic issues and should not be managed only by adding more product.'
    },
    'Protection & Progress Tracking': {
      mechanism: 'Protection and tracking steps reduce avoidable exposure or create consistent observations that can be compared over time.',
      practice: 'Dates, amount, reapplication, lighting and camera position matter because inconsistent records can make ordinary daily variation look like a treatment effect.',
      limits: 'A log supports decisions but cannot diagnose a changing lesion, persistent rash or other medical concern; those require appropriate professional assessment.'
    },
    'Bathing & Personal Hygiene': {
      mechanism: 'Bathing and hygiene steps remove sweat, environmental material and odour-producing residue while also exposing skin to water, friction and cleansing agents.',
      practice: 'Water temperature, duration, cleanser choice and drying method should match the body area and the person’s tolerance rather than assuming a longer or hotter wash is cleaner.',
      limits: 'Very hot water, repeated detergent use and vigorous towel friction can increase dryness even when the immediate result feels clean.'
    },
    'Hair & Scalp Care': {
      mechanism: 'Hair and scalp care balances removal of sebum, sweat, styling residue and scale with preservation of fibre lubrication and scalp comfort.',
      practice: 'The product should be placed where it is intended—cleanser mainly at the scalp, conditioner mainly through lengths—while frequency reflects oil, activity, hair texture and product build-up.',
      limits: 'Persistent scalp pain, marked shedding, sores or severe scaling are not solved simply by washing more often and may need professional assessment.'
    },
    'Beard & Facial-Hair Care': {
      mechanism: 'Facial-hair care addresses both the hair fibre and the skin underneath, where trapped residue, dryness and friction can otherwise be overlooked.',
      practice: 'Cleansing, drying, trimming and conditioning should be recorded separately when they happen at different frequencies.',
      limits: 'Heavy oils or waxes can feel protective but may create build-up; itching, pustules or persistent flaking may require a different product or assessment.'
    },
    'Oral Care': {
      mechanism: 'Oral-care actions mechanically or chemically reduce retained food debris, plaque and odour while supporting teeth, gums, tongue and dental appliances.',
      practice: 'Tool type, toothpaste or rinse, duration and timing matter, particularly when fluoride products or interdental tools are used.',
      limits: 'Bleeding that persists, tooth pain, ulcers or loose teeth are not routine grooming matters and require dental advice rather than more forceful cleaning.'
    },
    'Nail & Grooming Care': {
      mechanism: 'Grooming actions control length, rough edges, unwanted hair and local friction without needing to remove living tissue aggressively.',
      practice: 'Clean tools, good lighting and small controlled changes reduce accidental cuts and make the result easier to repeat.',
      limits: 'Cutting deeply into cuticles, corns or inflamed tissue can create injury or infection; painful or changing nails may need professional assessment.'
    },
    'Custom': {
      mechanism: 'A custom step is useful only when its purpose, method and expected result are written clearly enough to repeat.',
      practice: 'Use personal notes to record the product, amount, sequence, body area and any conditions that change how the step is performed.',
      limits: 'Because no standard method is implied, the user remains responsible for checking product instructions, compatibility and relevant safety advice.'
    }
  });

  const SPECIFIC = Object.freeze({
    'water-rinse': 'A water rinse can remove loose sweat, dust and water-soluble surface material without adding a surfactant, making it useful when the skin is not carrying sunscreen, makeup or heavy residue.',
    'oil-cleanse': 'An anhydrous oil cleanse uses lipids to dissolve and lift sebum, sunscreen, makeup and other oil-soluble residue; the chosen oil blend and how completely it is removed determine whether the finish feels supple, coated or congested.',
    'oil-based-cleansing-shower': 'An oil-based cleansing shower distributes an oil cleanser over wet or dry body skin to loosen oil-soluble residue before controlled rinsing or cloth removal, allowing body cleansing without conventional body wash or shampoo when that is the chosen method.',
    'cream-cleanse': 'A cream or milk cleanser combines water, emollients and mild cleansing agents so residue can be lifted with less foam and usually less squeaky after-feel than a strong foaming wash.',
    'micellar-cleanse': 'Micellar water suspends small cleansing aggregates in water so light makeup and surface oils can be transferred to a pad, but repeated wiping pressure and leave-on surfactant residue still matter.',
    'gel-cleanse': 'A gel or foaming cleanser relies more directly on water-rinse surfactants, which can be useful for heavier sweat or oily residue but may remove more surface lipid depending on formula and contact time.',
    'double-cleanse': 'Double cleansing separates oil-soluble removal from a second water-rinse cleanse, which can improve removal of tenacious sunscreen or makeup but also doubles cleansing exposure and is not necessary for every day.',
    'warm-cloth-removal': 'A warm damp cloth helps physically lift loosened cleanser and residue while adding gentle heat, but the cloth texture and number of passes contribute meaningful exfoliating friction.',
    'facial-steam': 'Facial steam warms the surface and temporarily increases water at the outer layer, which may soften hair and make massage or shaving feel easier, but it does not open pores like doors or perform deep extraction.',
    'warm-compress': 'A warm compress concentrates heat and moisture on a smaller area, useful for softening beard hair or loosening a cleanser without exposing the entire face to prolonged steam.',
    'cool-compress': 'A cool compress temporarily lowers surface temperature and can make heat or post-treatment discomfort feel calmer without correcting the underlying cause of inflammation.',
    'hydrating-toner': 'A hydrating toner adds a thin water-rich layer containing humectants or soothing ingredients, mainly improving immediate spread and feel before richer products.',
    'facial-essence': 'An essence is a lightweight conditioning layer that can add humectants or ferments between cleansing and serum stages without the occlusion of a cream.',
    'nurture-shine-mist': 'A facial mist delivers a small amount of water and dissolved ingredients quickly; it is most useful when followed by something that slows evaporation rather than being left to dry repeatedly.',
    'aloe-layer': 'Aloe gel is a water-rich film that can feel cooling and lightly humectant, while the final result depends on concentration, preservation, added alcohol or fragrance and whether a sealing layer follows.',
    'hydration-layer': 'A restorative hydration layer deliberately combines water and humectancy before moisturiser, making the sequence and concentration more important than simply adding another wet product.',
    'conductive-mist': 'A conductive mist maintains a continuous wet interface for a compatible device, reducing drag and intermittent contact while also contributing a light humectant layer.',
    'glycerin-layer': 'Glycerin attracts and holds water within the outer skin layer; concentration affects tack, comfort and how strongly the layer interacts with ambient humidity and the products placed over it.',
    'hyaluronic-layer': 'Hyaluronic-acid products form a water-binding film at the surface and can improve temporary plumpness and slip, but molecular form, vehicle and occlusion influence the feel more than the ingredient name alone.',
    'ceramide-moisturiser': 'A ceramide moisturiser combines barrier lipids with water and emollients, aiming to improve the organisation and comfort of the outer layer rather than merely coating it with oil.',
    'occlusive-seal': 'An occlusive or moisturising seal slows evaporation from the layers underneath, which can extend softness but may need a lighter amount in warm, oily or congestion-prone areas.',
    'facial-oil': 'Facial oil supplies emollient lipids and slip but little water, so it is best understood as a finishing or massage product rather than a complete hydration step by itself.',
    'lip-balm': 'Lip balm reduces evaporation and friction on a surface with limited oil glands, with waxes and occlusives providing protection while flavourings or fragrance may reduce tolerance for some users.',
    'hand-foot-balm': 'A concentrated hand or foot balm uses richer occlusion to protect high-wash or high-friction areas, often working best after water exposure and before a period without repeated contact.',
    'vitamin-c': 'Vitamin C products vary from acidic L-ascorbic acid to more stable derivatives, so antioxidant activity, irritation, colour change and packaging stability cannot be inferred from the label alone.',
    'niacinamide': 'Niacinamide is used in water-based formulas for barrier support, oil-balance and uneven-tone goals, but higher percentages are not automatically more effective and may increase flushing or irritation.',
    'peptide-serum': 'Peptide serums provide signalling or conditioning ingredients in a hydrating vehicle; their practical contribution depends on the specific peptide system and consistent use rather than an immediate lifting effect.',
    'retinoid': 'Retinoids influence cell turnover and collagen-related signalling over time, but strength, molecule, pregnancy restrictions, irritation and sun sensitivity make slow introduction and clear scheduling important.',
    'azelaic-acid': 'Azelaic acid is used for blemish, redness and uneven-tone goals and can be applied as a cream or gel, with stinging and dryness often managed through gradual frequency and moisturiser placement.',
    'salicylic-acid': 'Salicylic acid is oil-soluble and can enter oily follicular material while loosening retained surface cells, making treated area and total weekly exposure more informative than the product format.',
    'benzoyl-peroxide': 'Benzoyl peroxide reduces acne-associated bacteria through oxidation and can bleach fabric, while dryness and irritation depend on concentration, contact time and whether it is used as a wash or leave-on treatment.',
    'tranexamic-acid': 'Topical tranexamic-acid products are used for uneven pigmentation goals, generally as a longer-term supportive step rather than an immediate brightening treatment.',
    'caffeine-eye': 'Caffeine eye products may temporarily reduce the appearance of puffiness through vasoconstrictive and fluid-related effects, but they do not remove structural hollows or permanently tighten the eye area.',
    'physical-exfoliation': 'Physical exfoliation removes retained material through friction from particles, cloths or tools, so pressure and pass count are the effective dose even when the product itself is labelled gentle.',
    'aha-exfoliation': 'AHAs such as glycolic or lactic acid act mainly in water-rich surface layers and can improve smoothness and uneven tone while increasing irritation and sun-sensitivity risk when overused.',
    'bha-exfoliation': 'BHA usually refers to salicylic acid, combining keratolytic activity with oil solubility that can suit oily or congested areas when concentration and frequency remain tolerable.',
    'pha-exfoliation': 'PHAs have larger molecules and humectant properties that may feel gentler than some AHAs, but they still contribute to the total exfoliating load of the routine.',
    'enzyme-exfoliation': 'Enzyme exfoliants use proteolytic activity to loosen surface material without scrub particles, yet contact time, formula pH and individual sensitivity still control intensity.',
    'urea-treatment': 'Urea acts as a humectant at lower concentrations and becomes more keratolytic at higher concentrations, making the percentage and body area essential to understanding the treatment.',
    'led-light': 'LED therapy exposes skin to specified wavelengths for a controlled dose; red and near-infrared devices are commonly used for appearance and recovery goals, while blue-light devices target blemish-related bacteria, but output and evidence differ by device.',
    'radiofrequency': 'Radiofrequency devices generate controlled tissue heating through electrical energy, with contact gel, movement speed, temperature control and treatment spacing central to both comfort and intended collagen-remodelling goals.',
    'infrared-light': 'Infrared or near-infrared sessions deliver wavelengths beyond visible red light, with depth and heating varying by device rather than every infrared product producing the same biological dose.',
    'ipl-device': 'IPL emits broad-spectrum pulses filtered for hair or pigmentation targets, requiring correct skin-tone compatibility, shaved treatment areas, eye safety and strict spacing between sessions.',
    'ultrasound-device': 'Ultrasound facial devices use mechanical sound-wave energy through a coupling medium; the intended use may be cleansing, product delivery or heating depending on frequency and device design.',
    'heat-mask': 'A heated mask provides sustained surface warmth that may improve comfort and product spread, but temperature and duration must remain below the point that creates flushing, dryness or heat injury.',
    'microcurrent': 'Microcurrent facial devices apply low-level current through conductive gel to stimulate a temporary neuromuscular and sensory response; placement consistency, adequate gel and repeat sessions matter more than pushing intensity.',
    'galvanic-device': 'Galvanic devices use direct current and polarity-specific products, so electrode orientation and manufacturer-compatible formulas are part of the treatment rather than interchangeable accessories.',
    'iontophoresis': 'Iontophoresis uses electrical current to assist movement of compatible charged substances, which makes ingredient charge, concentration and device guidance essential to product selection.',
    'ems-facial': 'Facial EMS produces more visible muscle contraction than microcurrent, so intensity, placement and contraindications require separate tracking even when both devices use conductive gel.',
    'high-frequency-wand': 'High-frequency wands create a glass-electrode discharge that produces warmth and ozone-related effects at the surface, making electrode hygiene, contact technique and short exposure important.',
    'facial-cleansing-brush': 'A cleansing brush combines cleanser with repeated mechanical movement, which can improve removal but also adds friction that should be counted alongside cloths, scrubs and acids.',
    'skin-scrubber': 'An ultrasonic skin spatula uses vibration across wet skin to move loosened surface material; a shallow angle and continuous moisture reduce scraping pressure.',
    'microdermabrasion-device': 'At-home microdermabrasion combines abrasion and sometimes suction to remove surface cells, making tip condition, passes and recovery spacing more important than chasing an immediately polished feel.',
    'derma-roller': 'A derma roller creates repeated microchannels with needles, which raises sterility, needle-length, infection, pigmentation and contraindication concerns beyond ordinary cosmetic rolling.',
    'pore-vacuum': 'A pore vacuum applies suction to the skin surface and may lift loosened material, but high intensity or stationary use can bruise tissue and damage visible capillaries.',
    'ice-roller': 'A cooling tool temporarily reduces surface temperature and can make puffiness or heat feel less prominent, but direct extreme cold and prolonged contact can injure skin.',
    'facial-roller': 'A facial roller supplies light pressure and a repetitive movement pattern, offering sensory relaxation and temporary fluid redistribution without permanently lifting facial structure.',
    'professional-facial': 'A professional facial may combine cleansing, extraction, massage, masks and devices, so the exact components and post-treatment instructions should be recorded rather than assuming every facial is equivalent.',
    'professional-chemical-peel': 'A professional peel uses controlled acid strength, pH and contact time to create a planned exfoliating injury, followed by a recovery period in which home actives may need to stop.',
    'professional-microneedling': 'Professional microneedling creates controlled channels at a depth selected for the treatment goal, requiring sterile technique and careful aftercare around infection and pigmentation risk.',
    'professional-rf': 'Professional RF equipment can deliver more energy or different electrode configurations than home devices, so clinic settings and recovery instructions should be logged separately.',
    'professional-laser': 'Laser treatment uses a defined wavelength and pulse pattern to target pigment, vessels, hair or resurfacing depth, with sun exposure and aftercare often affecting safety and outcome.',
    'professional-ipl': 'Professional IPL uses filtered broad-spectrum light at clinic-selected settings, requiring accurate skin and target assessment plus pre- and post-treatment restrictions.',
    'facial-massage': 'Facial massage uses hands and lubricant to move the skin and underlying soft tissue within a comfortable range, helping relaxation and temporary circulation-related appearance without permanently remodelling facial anatomy.',
    'lymphatic-facial-massage': 'Lymphatic-style facial massage uses very light, direction-led strokes intended to support temporary fluid movement, and stronger pressure is not more effective for that purpose.',
    'gua-sha': 'Gua sha uses a smooth-edged tool over lubricated skin to provide broad pressure and direction, with shallow angles and low force reducing pulling and bruising.',
    'body-oil-massage': 'Body oil massage combines emollient application with pressure and movement, allowing skin lubrication, sensory regulation and attention to muscular tension in one timed step.',
    'scalp-massage': 'Scalp massage moves the scalp over the skull with fingers or a tool, supporting relaxation and product distribution while avoiding nail scratching and excessive traction on hair.',
    'shave-gel': 'Shave gel creates a hydrated, slippery interface between hair, blade and skin, reducing friction and helping the blade cut hair with fewer repeated passes.',
    'shave': 'A shaving entry records the actual hair-removal event rather than only its preparation product, allowing the blade or device method, body area, pass direction and aftercare response to be compared.',
    'electric-shave': 'Electric shaving cuts hair through a foil or rotary guard without an exposed blade directly sweeping the skin, but pressure, cleaning, pre-shave preparation and wet-versus-dry use still affect comfort.',
    'post-shave-support': 'Post-shave support replaces water and emolliency after hair and some surface cells have been removed, while avoiding high-fragrance or strongly active products on newly exposed skin.',
    'wax-epilate': 'Waxing or epilation removes hair from the root, creating longer intervals between sessions but more follicular inflammation and a greater need for clean technique and recovery spacing.',
    'body-hydration': 'A body hydration layer spreads water and humectants across a large area, ideally while skin still retains some post-wash moisture before a richer layer slows evaporation.',
    'body-occlusive': 'A body moisturiser or occlusive reduces transepidermal water loss over larger areas, with lotion, cream, balm and ointment textures providing progressively different levels of richness.',
    'body-oil': 'Body oil improves slip and surface softness by filling spaces between dry cells, but it supplies little water and is most effective over damp skin or a water-based layer.',
    'body-exfoliation': 'Body exfoliation targets thicker or rougher areas through acids, urea, cloths or scrubs, and should still be scheduled because large surface area does not make over-exfoliation harmless.',
    'foot-soak': 'A foot soak hydrates and softens the outer layer temporarily before nail or callus care, but prolonged soaking can macerate skin and does not treat infection.',
    'hand-care': 'A hand-care routine links cleansing, drying, humectancy and occlusion around repeated washing, making reapplication points more useful than a single daily application.',
    'sun-protection': 'Sun protection combines shade, clothing and a broad-spectrum product applied in sufficient quantity, reducing cumulative ultraviolet exposure that contributes to burning, pigmentation and photoageing.',
    'sunscreen-reapply': 'Reapplication restores film continuity after time, sweat, rubbing or water exposure; it is a separate action because a morning layer does not reliably remain uniform all day.',
    'patch-test': 'A patch test limits first exposure to a small area and observes delayed as well as immediate response, although it cannot guarantee that full-face or repeated use will be tolerated.',
    'skin-check': 'A regular skin check records dryness, comfort, lesions, colour change and irritation before altering products, helping distinguish a pattern from a single fluctuating day.',
    'progress-photo': 'A progress photograph standardises lighting, distance, angle and expression so changes can be compared more reliably than casual mirror impressions.',
    'shower': 'A shower removes sweat and loose environmental residue efficiently, while duration, water temperature and what is applied to each body area determine its effect on dryness and comfort.',
    'bath': 'A bath provides prolonged water exposure and can support relaxation or soaking treatments, but hot water and extended immersion can increase dryness unless followed by appropriate care.',
    'body-wash': 'Body wash uses surfactants to lift sweat, sebum and environmental residue over larger areas, with formula strength and where it is applied determining whether daily use feels comfortable or stripping.',
    'soap-bar': 'A soap bar cleans through alkaline fatty-acid salts that remove oils effectively, but pH and repeated whole-body use may feel drying for some skin types.',
    'shower-oil': 'A shower oil combines lipids with emulsifiers so it can spread with slip and rinse more cleanly than a fully anhydrous oil, providing a middle point between oil cleansing and conventional wash.',
    'deodorant': 'Deodorant reduces odour through fragrance, antimicrobial or odour-binding ingredients without necessarily reducing sweat production.',
    'antiperspirant': 'Antiperspirant uses aluminium salts to temporarily reduce sweat flow from treated ducts, making dry application and timing important for effectiveness.',
    'hand-wash': 'Hand washing mechanically removes soil and microbes with water and cleanser, but repeated exposure makes thorough drying and moisturiser timing part of the skin-care consequence.',
    'external-intimate-cleanse': 'External intimate cleansing should remain limited to external skin with mild products or water, avoiding internal washing and fragrance-heavy routines that disturb comfort.',
    'water-only-hair-wash': 'A water-only hair wash removes sweat and loose particles with water and mechanical movement but leaves more sebum and styling residue than a surfactant cleanse.',
    'shampoo-hair-wash': 'Shampoo concentrates surfactants at the scalp to remove sebum, sweat and product build-up, while the lengths usually need only the diluted runoff unless heavily coated.',
    'clarifying-shampoo': 'Clarifying shampoo uses stronger cleansing or chelating systems to remove build-up, making it an occasional reset rather than automatically the best everyday wash.',
    'co-wash': 'Co-washing uses a conditioner-like cleanser with lower detergency to refresh hair while retaining more lubrication, though it may allow build-up if used without periodic stronger cleansing.',
    'scalp-oil-cleanse': 'A scalp oil cleanse or pre-shampoo treatment uses oil to soften oil-soluble build-up and reduce friction before removal, but complete cleansing afterwards determines whether residue remains.',
    'condition-hair': 'Conditioner deposits cationic and emollient ingredients along the hair fibre, reducing friction, static and combing force after cleansing.',
    'deep-condition-hair': 'A deep conditioner or hair mask provides a longer contact period for conditioning agents, improving feel and manageability without permanently repairing split or fractured fibre.',
    'leave-in-conditioner': 'Leave-in conditioner remains on the fibre to provide ongoing slip, moisture retention and styling support, with quantity adjusted to density and build-up tendency.',
    'detangle-hair': 'Detangling separates knots with lubrication, sectioning and low force, reducing breakage compared with pulling through dry, resistant tangles.',
    'scalp-treatment': 'A scalp treatment targets a defined concern such as scale, dryness or oil with an ingredient-specific contact pattern, so the active and diagnosis should not be obscured by the general word treatment.',
    'hair-oil': 'Hair oil coats the fibre to increase shine, reduce friction and slow moisture loss, but excess oil can weigh hair down or require stronger cleansing later.',
    'dry-hair': 'Hair drying controls how long the scalp and fibre remain wet; towel pressure, airflow temperature and distance influence friction and heat damage.',
    'style-hair': 'Hair styling uses mechanical shaping and products to create hold or texture, with heat, tension and product build-up determining the longer-term cost to the fibre.',
    'beard-wash': 'Beard washing removes trapped food, sebum and product from hair and the skin beneath, while over-cleansing can increase roughness and itch.',
    'beard-condition': 'Beard conditioner softens coarse facial hair and reduces friction against the skin, improving combing and comfort.',
    'beard-oil': 'Beard oil lubricates facial-hair fibres and the underlying skin, reducing dry feel and friction without adding water-based hydration by itself.',
    'beard-trim': 'Beard trimming controls length and shape with guarded clippers or scissors, and clean tools plus consistent guard settings make the result repeatable.',
    'brush-teeth': 'Tooth brushing mechanically disrupts plaque while fluoride toothpaste supports enamel resistance, making coverage and duration more important than force.',
    'interdental-clean': 'Floss or interdental brushes clean surfaces a toothbrush does not reach effectively, with tool size and gentle technique protecting the gum margin.',
    'tongue-clean': 'Tongue cleaning removes retained coating and odour-producing material from the tongue surface without needing aggressive scraping.',
    'mouthwash': 'Mouthwash can deliver fluoride, antimicrobial or breath-freshening ingredients, but timing and formulation determine whether it complements rather than washes away toothpaste fluoride.',
    'dental-appliance-clean': 'Cleaning retainers, guards or dentures removes biofilm and residue from an appliance that is repeatedly placed against oral tissues.',
    'trim-nails': 'Nail trimming controls length and reduces snagging, while leaving a small free edge and avoiding deep corner cutting reduces injury risk.',
    'file-nails': 'Filing smooths rough edges gradually and can shape nails with less sudden stress than cutting very short.',
    'cuticle-care': 'Cuticle care softens and protects the seal around the nail rather than removing living tissue aggressively.',
    'callus-care': 'Callus care reduces excess thickened skin through controlled filing or keratolytic products while preserving enough tissue for pressure protection.',
    'eyebrow-groom': 'Eyebrow grooming trims or removes selected hairs to maintain shape, with clean tools and conservative changes reducing accidental gaps or inflammation.',
    'nose-ear-hair-trim': 'Nose and external ear-hair trimming shortens visible hair without inserting tools deeply or removing the protective function of internal hairs.',
    'custom': 'A custom action can represent any self-care step not yet in the catalogue, provided the notes define exactly what is done and what outcome is being tracked.'
  });

  const EXTRA_ACTIONS = Object.freeze([
    ['oil-based-cleansing-shower', 'Cleansing', 'Oil-Based Cleansing Shower', 'Uses an oil cleanser over the body during showering to loosen oil-soluble residue without relying on conventional body wash or shampoo.'],
    ['shower', 'Bathing & Personal Hygiene', 'Shower', 'Cleanses and refreshes the body through controlled water exposure and the products chosen for each area.'],
    ['bath', 'Bathing & Personal Hygiene', 'Bath', 'Provides a longer whole-body soak for cleansing, comfort or a planned treatment.'],
    ['body-wash', 'Bathing & Personal Hygiene', 'Body Wash Cleanse', 'Uses a rinse-off surfactant cleanser to remove sweat, oil and environmental residue from the body.'],
    ['soap-bar', 'Bathing & Personal Hygiene', 'Soap-Bar Cleanse', 'Uses a solid soap cleanser for targeted or whole-body washing.'],
    ['shower-oil', 'Bathing & Personal Hygiene', 'Shower Oil Cleanse', 'Uses an emulsifying oil cleanser that develops a milky rinse when water is added.'],
    ['deodorant', 'Bathing & Personal Hygiene', 'Apply Deodorant', 'Applies an odour-control product without necessarily reducing sweat.'],
    ['antiperspirant', 'Bathing & Personal Hygiene', 'Apply Antiperspirant', 'Applies a product intended to reduce perspiration in the treated area.'],
    ['hand-wash', 'Bathing & Personal Hygiene', 'Wash Hands', 'Removes soil and microbes from the hands using water, cleanser and friction.'],
    ['external-intimate-cleanse', 'Bathing & Personal Hygiene', 'External Intimate Cleanse', 'Cleanses external intimate skin gently without internal washing.'],
    ['water-only-hair-wash', 'Hair & Scalp Care', 'Water-Only Hair Wash', 'Rinses sweat and loose residue from hair and scalp without shampoo.'],
    ['shampoo-hair-wash', 'Hair & Scalp Care', 'Shampoo Hair Wash', 'Uses shampoo at the scalp to remove sebum, sweat and product build-up.'],
    ['clarifying-shampoo', 'Hair & Scalp Care', 'Clarifying Hair Wash', 'Uses a stronger cleansing or chelating shampoo to remove accumulated build-up.'],
    ['co-wash', 'Hair & Scalp Care', 'Co-Wash Hair', 'Uses a low-detergent conditioning cleanser to refresh hair while retaining more lubrication.'],
    ['scalp-oil-cleanse', 'Hair & Scalp Care', 'Scalp Oil Cleanse / Pre-Wash Oil', 'Uses oil before washing to soften residue and reduce friction during cleansing.'],
    ['condition-hair', 'Hair & Scalp Care', 'Condition Hair', 'Applies rinse-out conditioner to reduce friction and improve manageability.'],
    ['deep-condition-hair', 'Hair & Scalp Care', 'Deep Condition / Hair Mask', 'Uses a longer-contact conditioning treatment for softness and manageability.'],
    ['leave-in-conditioner', 'Hair & Scalp Care', 'Apply Leave-In Conditioner', 'Leaves a light conditioning product on the hair for continuing slip and protection.'],
    ['detangle-hair', 'Hair & Scalp Care', 'Detangle Hair', 'Separates knots in sections using lubrication and controlled tension.'],
    ['scalp-treatment', 'Hair & Scalp Care', 'Scalp Treatment', 'Applies a targeted scalp product with a defined area and contact time.'],
    ['hair-oil', 'Hair & Scalp Care', 'Apply Hair Oil', 'Coats hair fibres with a small amount of oil for slip, shine and reduced friction.'],
    ['dry-hair', 'Hair & Scalp Care', 'Dry Hair', 'Dries hair through air, towel, diffuser or dryer with controlled heat and friction.'],
    ['style-hair', 'Hair & Scalp Care', 'Style Hair', 'Shapes or sets hair using tools, tension, heat or styling products.'],
    ['beard-wash', 'Beard & Facial-Hair Care', 'Wash Beard', 'Cleanses facial hair and the skin beneath it.'],
    ['beard-condition', 'Beard & Facial-Hair Care', 'Condition Beard', 'Softens beard hair and reduces friction against the skin.'],
    ['beard-oil', 'Beard & Facial-Hair Care', 'Apply Beard Oil', 'Lubricates beard hair and the skin beneath with a light oil layer.'],
    ['beard-trim', 'Beard & Facial-Hair Care', 'Trim Beard', 'Maintains beard length and shape with clippers or scissors.'],
    ['brush-teeth', 'Oral Care', 'Brush Teeth', 'Removes plaque mechanically while delivering the chosen toothpaste ingredients.'],
    ['interdental-clean', 'Oral Care', 'Floss / Interdental Clean', 'Cleans between teeth using floss, tape, picks or interdental brushes.'],
    ['tongue-clean', 'Oral Care', 'Clean Tongue', 'Removes retained coating from the tongue surface.'],
    ['mouthwash', 'Oral Care', 'Use Mouthwash', 'Uses a rinse for fluoride, antimicrobial or breath-freshening purposes.'],
    ['dental-appliance-clean', 'Oral Care', 'Clean Dental Appliance', 'Cleans a retainer, mouthguard, denture or similar appliance.'],
    ['trim-nails', 'Nail & Grooming Care', 'Trim Nails', 'Controls fingernail or toenail length with clean clippers or scissors.'],
    ['file-nails', 'Nail & Grooming Care', 'File Nails', 'Smooths and shapes nail edges gradually.'],
    ['cuticle-care', 'Nail & Grooming Care', 'Cuticle Care', 'Softens and protects the skin seal around the nail.'],
    ['callus-care', 'Nail & Grooming Care', 'Callus / Hard-Skin Care', 'Reduces excess thickened skin through controlled filing or a keratolytic product.'],
    ['eyebrow-groom', 'Nail & Grooming Care', 'Eyebrow Grooming', 'Trims or removes selected eyebrow hairs to maintain shape.'],
    ['nose-ear-hair-trim', 'Nail & Grooming Care', 'Nose / External Ear Hair Trim', 'Shortens visible hair using a guarded trimmer or small scissors.']
  ]);

  function expanded(action) {
    const group = GROUP_TEXT[action.group] || GROUP_TEXT.Custom;
    return `${action.benefitBrief || action.benefit || ''} ${SPECIFIC[action.id] || `This entry records ${action.title.toLocaleLowerCase('en-GB')} as a distinct action so its method and response can be compared over time.`} ${group.mechanism} ${group.practice} ${group.limits}`.replace(/\s+/g, ' ').trim();
  }

  function buildAction(id, group, title, brief) {
    const source = { id, group, title, benefit: brief, benefitBrief: brief };
    return Object.freeze(Object.assign(source, { benefitComprehensive: expanded(source) }));
  }

  const actionMap = new Map();
  CORE.ACTIONS.forEach((action) => {
    const source = Object.assign({}, action, { benefitBrief: action.benefitBrief || action.benefit || '' });
    actionMap.set(action.id, Object.freeze(Object.assign(source, { benefit: source.benefitBrief, benefitComprehensive: expanded(source) })));
  });
  EXTRA_ACTIONS.forEach(([id, group, title, brief]) => actionMap.set(id, buildAction(id, group, title, brief)));

  const GROUPS = Object.freeze([...CORE.GROUPS, ...EXTRA_GROUPS.filter((group) => !CORE.GROUPS.includes(group))]);
  const ACTIONS = Object.freeze(Array.from(actionMap.values()).sort((left, right) => {
    const groupDifference = GROUPS.indexOf(left.group) - GROUPS.indexOf(right.group);
    return groupDifference || left.title.localeCompare(right.title, 'en-GB', { sensitivity: 'base' });
  }));
  const ACTION_BY_ID = new Map(ACTIONS.map((action) => [action.id, action]));

  function cleanText(value, maximum) {
    return String(value == null ? '' : value).trim().slice(0, maximum);
  }

  function benefitText(value, requestedMode) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = source.benefitBrief && source.benefitComprehensive ? source : ACTION_BY_ID.get(String(source.actionId || source.id || ''));
    if (!definition) return '';
    const mode = requestedMode === 'brief' ? 'brief' : 'comprehensive';
    return mode === 'brief' ? definition.benefitBrief : definition.benefitComprehensive;
  }

  function supportsShavingMethod(actionId) {
    return ['shave', 'electric-shave', 'beard-trim', 'nose-ear-hair-trim'].includes(String(actionId || ''));
  }

  function normaliseItem(value, fallbackIndex = 0) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = ACTION_BY_ID.get(String(source.actionId || '')) || ACTION_BY_ID.get('custom') || ACTIONS[0];
    const timeOfDay = CORE.TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime';
    const shavingMethod = SHAVING_METHODS.some((entry) => entry.value === source.shavingMethod) ? source.shavingMethod : (definition.id === 'electric-shave' ? 'electric-foil' : 'wet-cartridge');
    return {
      id: cleanText(source.id || `routine-${fallbackIndex + 1}`, 80),
      actionId: definition.id,
      title: cleanText(source.title || definition.title, 100),
      benefitMode: 'comprehensive',
      benefit: definition.benefitComprehensive,
      timeOfDay,
      frequency: CORE.normaliseFrequency(source.frequency),
      notes: cleanText(source.notes, 1200),
      shavingMethod: supportsShavingMethod(definition.id) ? shavingMethod : '',
      productSelection: cleanText(source.productSelection, 180),
      productName: cleanText(source.productName, 180),
      customProductName: cleanText(source.customProductName, 180),
      useGroupFrequency: Boolean(source.useGroupFrequency),
      useGroupTime: Boolean(source.useGroupTime)
    };
  }

  function normaliseRoutine(value) {
    const source = Array.isArray(value) ? value : [];
    const seen = new Set();
    const items = [];
    source.slice(0, 120).forEach((raw, index) => {
      const item = normaliseItem(raw, index);
      if (!item.id || seen.has(item.id)) item.id = `${item.id || 'routine'}-${index + 1}`;
      seen.add(item.id);
      items.push(item);
    });
    return items;
  }

  function summaryGroups(items) {
    const groups = { morning: [], evening: [], anytime: [] };
    normaliseRoutine(items).forEach((item) => groups[item.timeOfDay].push(item));
    return groups;
  }

  const API = Object.freeze(Object.assign({}, CORE, {
    GROUPS,
    ACTIONS,
    ACTION_BY_ID,
    SHAVING_METHODS,
    benefitText,
    supportsShavingMethod,
    normaliseItem,
    normaliseRoutine,
    summaryGroups
  }));

  global.BASELINE_SKINCARE_ROUTINE_MODEL = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof window !== 'undefined' ? window : globalThis);
