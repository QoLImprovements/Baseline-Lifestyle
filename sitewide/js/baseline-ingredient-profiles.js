/* Baseline Lifestyle — Ingredient Profiles
   Central reference for converting between:
   - weight (g)
   - volume (ml)
   - measuring cups/spoons
   - count-based “units” (e.g., 1 tomato, 2 apples)
   - drops (e.g., essential oils)

   Notes:
   - These are *practical kitchen/skincare approximations* intended for consistent UI output.
   - Real-world weights vary by brand, grind size, moisture content, and produce size.
*/

(function(){
  "use strict";

  /* Common measuring tools (metric set; aligns with 5 ml tsp / 15 ml tbsp) */
  const MEASURES = {
    ml_per_tsp: 5,
    ml_per_tbsp: 15,
    ml_per_cup: 250,
    ml_per_drop: 0.05 // ~20 drops per ml (approx.)
  };

  /* Helpers for creating complete “volume ↔ weight ↔ kitchen measure” support. */
  function withDerived(profile){
    const p = Object.assign({}, profile);
    const tbsp_per_cup = MEASURES.ml_per_cup / MEASURES.ml_per_tbsp; // 250/15 ≈ 16.6667

    // Establish the drop volume first so a drop-weight anchor can also supply density.
    if(typeof p.ml_per_drop !== "number") p.ml_per_drop = MEASURES.ml_per_drop;

    // Derive density from whichever reliable anchor the ingredient provides.
    if(typeof p.g_per_ml !== "number"){
      if(typeof p.g_per_cup === "number"){
        p.g_per_ml = p.g_per_cup / MEASURES.ml_per_cup;
      }else if(typeof p.g_per_tbsp === "number"){
        p.g_per_ml = p.g_per_tbsp / MEASURES.ml_per_tbsp;
      }else if(typeof p.g_per_tsp === "number"){
        p.g_per_ml = p.g_per_tsp / MEASURES.ml_per_tsp;
      }else if(typeof p.g_per_drop === "number" && p.ml_per_drop > 0){
        p.g_per_ml = p.g_per_drop / p.ml_per_drop;
      }
    }

    // Density makes all standard metric measuring tools available.
    if(typeof p.g_per_ml === "number"){
      if(typeof p.g_per_tsp !== "number") p.g_per_tsp = p.g_per_ml * MEASURES.ml_per_tsp;
      if(typeof p.g_per_tbsp !== "number") p.g_per_tbsp = p.g_per_ml * MEASURES.ml_per_tbsp;
      if(typeof p.g_per_cup !== "number") p.g_per_cup = p.g_per_ml * MEASURES.ml_per_cup;
    }

    // If cup exists but tbsp/tsp are missing, derive them.
    if(typeof p.g_per_cup === "number" && typeof p.g_per_tbsp !== "number"){
      p.g_per_tbsp = p.g_per_cup / tbsp_per_cup;
    }
    if(typeof p.g_per_tbsp === "number" && typeof p.g_per_tsp !== "number"){
      p.g_per_tsp = p.g_per_tbsp / 3;
    }

    // If tsp-only is provided, derive tbsp/cup.
    if(typeof p.g_per_tsp === "number" && typeof p.g_per_tbsp !== "number"){
      p.g_per_tbsp = p.g_per_tsp * 3;
    }
    if(typeof p.g_per_tbsp === "number" && typeof p.g_per_cup !== "number"){
      p.g_per_cup = p.g_per_tbsp * tbsp_per_cup;
    }

    // Count anchors become bi-directional whenever density is known.
    if(typeof p.g_per_ml === "number" && p.g_per_ml > 0){
      if(typeof p.g_per_unit === "number" && typeof p.ml_per_unit !== "number"){
        p.ml_per_unit = p.g_per_unit / p.g_per_ml;
      }else if(typeof p.ml_per_unit === "number" && typeof p.g_per_unit !== "number"){
        p.g_per_unit = p.ml_per_unit * p.g_per_ml;
      }
    }

    // Drops: derive grams per drop if density is known.
    if(typeof p.g_per_drop !== "number" && typeof p.g_per_ml === "number"){
      p.g_per_drop = p.g_per_ml * p.ml_per_drop;
    }

    return p;
  }

  const FOOD = {
    /* Pantry + powders */
    "ing-almonds": withDerived({
      label: "Almonds (whole)",
      g_per_cup: 140,
      notes: "Approx. 1 metric cup whole almonds ≈ 140 g."
    }),
    "ing-flaxseed": withDerived({
      label: "Ground flaxseed",
      g_per_cup: 110,
      notes: "Approx. 1 metric cup ground flaxseed ≈ 110 g."
    }),
    "ing-nutritional-yeast": withDerived({
      label: "Nutritional yeast flakes",
      g_per_tbsp: 2.5,
      notes: "Common label serving: 2 tbsp ≈ 5 g."
    }),
    "ing-polenta": withDerived({
      label: "Polenta (dry)",
      g_per_cup: 155,
      notes: "Dry polenta/cornmeal varies by grind; 1 metric cup ≈ 155 g."
    }),
    "ing-tahini": withDerived({
      label: "Tahini",
      g_per_tbsp: 15,
      notes: "Thick paste; 1 tbsp ≈ 15 g (approx.)."
    }),
    "ing-peanut-butter": withDerived({
      label: "Peanut butter",
      g_per_tbsp: 16,
      notes: "Typical: 1 tbsp ≈ 16 g."
    }),
    "ing-cashew-butter": withDerived({
      label: "Cashew butter",
      g_per_tbsp: 16,
      notes: "Typical: 1 tbsp ≈ 16 g (approx.)."
    }),
    "ing-brazil-nut-butter": withDerived({
      label: "Brazil nut butter",
      g_per_tbsp: 16,
      notes: "Typical: 1 tbsp ≈ 16 g (approx.)."
    }),
    "ing-macadamia-butter": withDerived({
      label: "Macadamia butter",
      g_per_tbsp: 14,
      notes: "Practical product-label anchor: 2 tbsp ≈ 28 g; natural nut butters vary slightly by grind and oil separation."
    }),
    "ing-jumbo-oats": withDerived({
      label: "Jumbo oats (rolled)",
      g_per_cup: 90,
      notes: "Rolled oats vary by brand; 1 metric cup ≈ 90 g."
    }),
    "ing-porridge-oats": withDerived({
      label: "Porridge oats (quick)",
      g_per_cup: 90,
      notes: "Porridge/quick oats vary by brand; 1 metric cup ≈ 90 g."
    }),
    "ing-oat-groats": withDerived({
      label: "Oat groats (gluten-free)",
      g_per_cup: 180,
      notes: "Wholegrain oat base; 1 metric cup ≈ 180 g (approx.)."
    }),
    "ing-cashews": withDerived({
      label: "Cashews",
      g_per_cup: 130,
      notes: "Approx. 1 metric cup whole cashews ≈ 130 g (varies)."
    }),
    "ing-dried-herbs": withDerived({
      label: "Dried mixed herbs",
      g_per_tsp: 1.0,
      notes: "Generic dried mixed herb blend; 1 tsp ≈ 1 g (approx.)."
    }),
    "ing-ground-cinnamon": withDerived({
      label: "Ground cinnamon",
      g_per_tsp: 2.6,
      notes: "Typical: 1 tsp ≈ 2.6 g."
    }),
    "ing-vanilla-bean-powder": withDerived({
      label: "Vanilla bean powder",
      g_per_tsp: 2.0,
      notes: "Highly variable; 1 tsp ≈ 2 g (approx.)."
    }),
    "ing-parsley": withDerived({
      label: "Dried parsley",
      g_per_tsp: 0.5,
      notes: "Light herb; 1 tsp ≈ 0.5 g (approx.)."
    }),
    "ing-rosemary": withDerived({
      label: "Rosemary (dried)",
      g_per_tsp: 1,
      notes: "Aromatic dried herb; 1 tsp ≈ 1 g (approx.)."
    }),
    "ing-basil": withDerived({
      label: "Dried basil",
      g_per_tsp: 0.7,
      notes: "Light herb; 1 tsp ≈ 0.7 g (approx.)."
    }),
    "ing-sage": withDerived({
      label: "Dried sage",
      g_per_tsp: 0.7,
      notes: "Typical: 1 tsp ≈ 0.7 g (approx.)."
    }),
    "ing-herbes-de-provence": withDerived({
      label: "Herbes de Provence",
      g_per_tsp: 1.0,
      notes: "Blend; 1 tsp ≈ 1 g (approx.)."
    }),
    "ing-dead-sea-salt": withDerived({
      label: "Dead Sea salt",
      g_per_tsp: 6.0,
      notes: "Practical fine-crystal estimate; crystal size and packing can change spoon weight, so gram measurements remain preferred for precise cosmetic batches."
    }),
    "ing-sea-salt": withDerived({
      label: "Sea salt / salt",
      g_per_tsp: 6.0,
      g_per_pinch: 0.35,
      notes: "Salt grain size varies. 1 tsp ≈ 6 g; 1 pinch ≈ 0.35 g (approx.)."
    }),
    "ing-cornflour": withDerived({
      label: "Cornflour / cornstarch",
      g_per_tbsp: 8.0,
      notes: "Typical: 1 tbsp ≈ 8 g."
    }),
    "ing-cassava-flour": withDerived({
      label: "Cassava flour",
      g_per_cup: 120,
      notes: "Varies by brand; 1 metric cup ≈ 120 g."
    }),
    "ing-almond-butter": withDerived({
      label: "Almond butter",
      g_per_tbsp: 16,
      notes: "Typical: 1 tbsp ≈ 16 g (approx.)."
    }),
    "ing-sattu": withDerived({
      label: "Sattu (roasted gram flour)",
      g_per_cup: 120,
      notes: "Roasted gram flour; 1 metric cup ≈ 120 g (approx.)."
    }),
    "ing-nut-butter": withDerived({
      label: "Nut butter",
      g_per_tbsp: 16,
      notes: "Typical: 1 tbsp ≈ 16 g."
    }),

    /* Liquids */
    "ing-water": withDerived({
      label: "Water",
      g_per_ml: 1.0,
      notes: "1 ml water ≈ 1 g."
    }),
    "ing-lemon": withDerived({
      label: "Lemon (juice)",
      g_per_ml: 1.03,
      ml_per_unit: 45,
      notes: "Assumes ~45 ml juice per 1 lemon (variable)."
    }),

    /* Produce (count → grams) */
    "ing-red-pepper": withDerived({
      label: "Red pepper",
      g_per_cup: 150,
      g_per_unit: 150,
      notes: "Approx. 1 metric cup chopped red pepper ≈ 150 g. 1 medium red pepper ≈ 150 g (varies)."
    }),
    "ing-sweet-potato": withDerived({
      label: "Sweet potato",
      g_per_cup: 200,
      g_per_unit: 180,
      notes: "Approx. 1 metric cup cooked sweet potato ≈ 200 g. 1 medium sweet potato edible portion ≈ 180 g (varies)."
    }),
    "ing-aubergine": withDerived({
      label: "Aubergine",
      g_per_cup: 90,
      g_per_unit: 300,
      notes: "Approx. 1 metric cup cooked aubergine ≈ 90 g. 1 medium aubergine ≈ 300 g (varies)."
    }),
    "ing-avocado": withDerived({
      label: "Avocado",
      g_per_cup: 230,
      g_per_unit: 150,
      notes: "Approx. 1 metric cup mashed avocado ≈ 230 g. 1 medium avocado edible portion ≈ 150 g."
    }),
    "ing-tomatoes": withDerived({
      label: "Tomatoes",
      g_per_cup: 210,
      g_per_unit: 120,
      notes: "Approx. 1 metric cup chopped tomatoes ≈ 210 g. 1 medium tomato ≈ 120 g (varies)."
    }),
    "ing-carrot": withDerived({
      label: "Carrots",
      g_per_cup: 130,
      g_per_unit: 61,
      notes: "Approx. 1 metric cup sliced/chopped carrots ≈ 130 g. 1 medium carrot ≈ 61 g (varies)."
    }),
    "ing-mushrooms": withDerived({
      label: "Mushrooms (fresh, sliced)",
      g_per_cup: 80,
      g_per_unit: 18,
      notes: "Approx. 1 metric cup sliced mushrooms ≈ 80 g. 1 medium button mushroom ≈ 18 g (varies)."
    }),
    "ing-white-mushroom": withDerived({
      label: "White mushrooms (fresh, sliced)",
      g_per_cup: 80,
      g_per_unit: 18,
      notes: "Alias profile for the White Mushroom ingredient page; uses the same practical conversion as ing-mushrooms."
    }),
    "ing-apple": withDerived({
      label: "Apples",
      g_per_cup: 125,
      g_per_unit: 182,
      notes: "Approx. 1 metric cup chopped apple ≈ 125 g. 1 medium apple ≈ 182 g (varies)."
    }),
    "ing-pear": withDerived({
      label: "Pears",
      g_per_cup: 170,
      g_per_unit: 178,
      notes: "Approx. 1 metric cup chopped pear ≈ 170 g. 1 medium pear ≈ 178 g (varies)."
    }),
    "ing-potato": withDerived({
      label: "Potato",
      g_per_cup: 160,
      g_per_unit: 170,
      notes: "Approx. 1 metric cup cooked potato ≈ 160 g. 1 medium potato edible portion ≈ 170 g (varies)."
    }),
    "ing-mung-beans": withDerived({
      label: "Dried mung beans",
      g_per_cup: 200,
      notes: "Approx. 1 metric cup dried mung beans ≈ 200 g; bean size and packing vary."
    }),
    "ing-peas": withDerived({
      label: "Frozen peas",
      g_per_cup: 145,
      notes: "Approx. 1 metric cup frozen peas ≈ 145 g; practical kitchen conversion."
    }),
    "ing-sweetcorn": withDerived({
      label: "Frozen sweetcorn",
      g_per_cup: 165,
      notes: "Approx. 1 metric cup frozen sweetcorn kernels ≈ 165 g; practical kitchen conversion."
    }),
    "ing-spinach": withDerived({
      label: "Frozen spinach",
      g_per_cup: 150,
      notes: "Approx. 1 metric cup frozen chopped spinach ≈ 150 g; packing and water content vary."
    }),
    "ing-green-pepper": withDerived({
      label: "Green pepper",
      g_per_cup: 150,
      g_per_unit: 150,
      notes: "Approx. 1 metric cup chopped green pepper ≈ 150 g. 1 medium green pepper ≈ 150 g (varies)."
    }),
    "ing-yellow-pepper": withDerived({
      label: "Yellow pepper",
      g_per_cup: 150,
      g_per_unit: 150,
      notes: "Approx. 1 metric cup chopped yellow pepper ≈ 150 g. 1 medium yellow pepper ≈ 150 g (varies)."
    }),
    "ing-tapioca-starch": withDerived({
      label: "Tapioca starch",
      g_per_tbsp: 8,
      notes: "Approx. 1 tbsp tapioca starch ≈ 8 g (varies slightly by brand and packing)."
    }),
    "ing-turmeric": withDerived({
      label: "Turmeric (ground)",
      g_per_tsp: 2.2,
      notes: "Ground turmeric is potent in colour; 1 tsp ≈ 2.2 g (approx.)."
    }),
    "ing-chickpeas": withDerived({
      label: "Dried chickpeas",
      g_per_cup: 200,
      notes: "Approx. 1 metric cup dried chickpeas ≈ 200 g (varies by size)."
    })
  };

  const SKIN = {
    /* Butters / waxes */
    "ing-shea": withDerived({
      label: "Shea butter",
      g_per_ml: 0.91,
      g_per_tbsp: 12,
      notes: "Solid butter; density varies with temperature. Conversions assume melted/level measures for consistent UI output."
    }),
    "ing-shea-butter": withDerived({
      label: "Shea butter",
      g_per_ml: 0.91,
      g_per_tbsp: 12,
      notes: "Alias profile for the Shea Butter ingredient route."
    }),
    "ing-carnauba": withDerived({
      label: "Carnauba wax",
      g_per_ml: 0.97,
      notes: "Typically measured by weight (g). Density is provided so Volume mode can still render consistently."
    }),
    "ing-cocoa-butter": withDerived({
      label: "Cocoa butter",
      g_per_ml: 0.91,
      notes: "Solid butter; practical conversion is approximate and assumes melted/level volume. Weigh grams for repeatable balm formulation."
    }),
    "ing-mango-butter": withDerived({
      label: "Mango butter",
      g_per_ml: 0.915,
      notes: "Solid butter; practical conversion uses an approximate midpoint density. Weigh grams for repeatable balm formulation."
    }),
    "ing-kokum-butter": withDerived({
      label: "Kokum butter",
      g_per_ml: 0.91,
      notes: "Hard solid butter; volume conversion is approximate. Weigh grams for repeatable balm formulation."
    }),
    "ing-candelilla-wax": withDerived({
      label: "Candelilla wax",
      g_per_ml: 0.98,
      notes: "Hard plant wax; density/packing varies by flake or pellet form. Weigh grams for repeatable balm structure."
    }),
    "ing-calendula": withDerived({
      label: "Calendula infused oil",
      g_per_ml: 0.92,
      notes: "Treated as a carrier oil for conversion purposes."
    }),
    "ing-coconut": withDerived({
      label: "Coconut oil",
      g_per_ml: 0.92,
      notes: "Semi-solid; density varies with temperature."
    }),
    "ing-extra-virgin-coconut-oil": withDerived({
      label: "Extra virgin coconut oil",
      g_per_ml: 0.92,
      notes: "Unrefined semi-solid coconut oil; density and physical state vary with temperature."
    }),
    "ing-olive-squalane": withDerived({
      label: "Olive squalane",
      g_per_ml: 0.81,
      notes: "Lightweight olive-derived squalane; practical density can vary slightly by supplier and temperature."
    }),

    /* Carrier oils */
    "ing-safflower": withDerived({
      label: "Safflower oil",
      g_per_ml: 0.92,
      notes: "Carrier-oil conversion; practical density varies slightly by cultivar, processing and temperature."
    }),
    "ing-olive": withDerived({ label: "Olive oil", g_per_ml: 0.91 }),
    "ing-avocado": withDerived({ label: "Avocado oil", g_per_ml: 0.91 }),
    "ing-apricot-kernel-oil": withDerived({
      label: "Apricot kernel oil",
      g_per_ml: 0.91,
      notes: "Carrier-oil conversion; practical density varies slightly with supplier and temperature."
    }),
    "ing-red-raspberry-seed-oil": withDerived({
      label: "Red raspberry seed oil",
      g_per_ml: 0.92,
      notes: "Seed-oil conversion; practical density varies slightly with supplier and temperature."
    }),
    "ing-argan": withDerived({ label: "Argan oil", g_per_ml: 0.91 }),
    "ing-jojoba": withDerived({ label: "Jojoba oil", g_per_ml: 0.87 }),
    "ing-jojoba-oil": withDerived({ label: "Jojoba oil", g_per_ml: 0.87, notes: "Alias profile for the Jojoba Oil ingredient route." }),
    "ing-watermelon": withDerived({ label: "Watermelon seed oil", g_per_ml: 0.92 }),
    "ing-fractionated-coconut": withDerived({
      label: "Fractionated coconut oil",
      g_per_ml: 0.95,
      notes: "Light liquid coconut fraction with quick spread and a cleaner finish than regular coconut oil."
    }),
    "ing-mct": withDerived({ label: "MCT oil", g_per_ml: 0.95 }),
    "ing-castor": withDerived({ label: "Castor oil", g_per_ml: 0.96 }),
    "ing-castor-oil": withDerived({ label: "Castor oil", g_per_ml: 0.96, notes: "Alias profile for the Castor Oil ingredient route." }),

    /* Actives + additions */
    "ing-glycerin": withDerived({ label: "Vegetable glycerin", g_per_ml: 1.26 }),
    "ing-vitamin-e": withDerived({ label: "Vitamin E (tocopherol)", g_per_ml: 0.95 }),

    /* Hydrosols / waters */
    "ing-water": withDerived({ label: "Water", g_per_ml: 1.0 }),
    "ing-witchhazel": withDerived({ label: "Witch hazel", g_per_ml: 1.0 }),
    "ing-rosewater": withDerived({ label: "Rose water", g_per_ml: 1.0 }),
    "ing-cucumber-hydrosol": withDerived({ label: "Cucumber hydrosol", g_per_ml: 1.0 }),
    "ing-cucumber": withDerived({
      label: "Cucumber seed oil",
      g_per_ml: 0.922,
      notes: "Cucumis sativus seed oil. Practical density uses the midpoint of a 0.915–0.930 relative-density specification at 25°C; 240 ml is approximately 221.3 g."
    }),
    "ing-cucumber-seed-oil": withDerived({
      label: "Cucumber seed oil",
      g_per_ml: 0.922,
      notes: "Alias profile for the Cucumber Seed Oil ingredient route."
    }),

    /* Powders / thickeners */
    "ing-slipperyelm": withDerived({
      label: "Slippery elm powder",
      g_per_tbsp: 5.0,
      notes: "Powder density varies; tbsp conversion is approximate."
    }),
    "ing-guar-gum": withDerived({
      label: "Guar gum powder",
      g_per_tsp: 3.0,
      notes: "Practical level-spoon anchor: 1 tsp ≈ 3.0 g. Weigh grams for the most repeatable gel texture."
    }),
    "ing-white-kaolin": withDerived({
      label: "Superfine white kaolin clay",
      g_per_ml: 0.50,
      notes: "Practical loose bulk-density anchor for fine cosmetic kaolin; packing varies, so grams remain preferred for repeatable powder formulas."
    }),
    "ing-sage-leaf-powder": withDerived({
      label: "Finely powdered sage leaf",
      g_per_ml: 0.34,
      notes: "Practical loose bulk-density anchor for fine sage leaf powder; grind and packing can change spoon weight."
    }),
    "ing-peppermint-leaf-powder": withDerived({
      label: "Finely powdered peppermint leaf",
      g_per_ml: 0.45,
      notes: "Uses the midpoint of a 0.30–0.60 g/ml loose bulk-density range for fine peppermint leaf powder; grams are preferred where precision matters."
    }),
    "ing-colloidal-oatmeal": withDerived({
      label: "Colloidal oatmeal",
      g_per_tsp: 3.2,
      notes: "Practical recipe anchor: 4 g ≈ 1¼ tsp; powder packing varies, so gram measurement remains the repeatable reference."
    }),
    "ing-marshmallow-root-powder": withDerived({
      label: "Marshmallow root powder",
      g_per_ml: 0.50,
      notes: "Uses the midpoint of a 0.40–0.60 g/ml loose bulk-density range for fine marshmallow root powder."
    }),
    "ing-inulin-powder": withDerived({
      label: "Chicory-root inulin powder",
      g_per_tsp: 2.5,
      notes: "Practical product anchor: 1 tsp ≈ 2.5 g; brands and powder structure can vary."
    }),
    "ing-sunflower-lecithin-powder": withDerived({
      label: "Sunflower lecithin powder",
      g_per_tsp: 2.5,
      notes: "Practical product-label anchor: 1 tsp ≈ 2.5 g; packing and manufacturer can vary."
    }),

    /* Salts / household */
    "ing-dead-sea-salt": withDerived({
      label: "Dead Sea salt",
      g_per_tsp: 6.0,
      notes: "Practical fine-crystal estimate; crystal size and packing can change spoon weight, so gram measurements remain preferred for precise cosmetic batches."
    }),
    "ing-epsom": withDerived({
      label: "Epsom salt",
      g_per_tbsp: 15,
      notes: "Crystal size varies."
    }),
    "ing-vinegar": withDerived({ label: "Apple cider vinegar", g_per_ml: 1.01 }),

    /* Essential oils */
    "ing-lavender": withDerived({
      label: "Lavender essential oil",
      g_per_drop: 0.04,
      notes: "Displayed as drops, with approximate weight in brackets. Drop weight also supplies the density anchor used for volume/cup-spoon conversion."
    })
  };

  window.BASELINE_MEASURE_CONSTANTS = MEASURES;
  window.BASELINE_INGREDIENT_PROFILES = { food: FOOD, skin: SKIN };

  /* Keep testing powder ingredients wired into the shared conversion engine.
     These ingredients now use canonical ingredient-library links; the fallback
     name map remains for older cached markup and legacy copies. */
  function wireTestingPowderIngredients(){
    const mappings = {
      r9: {
        "superfine food/pharmaceutical-grade white kaolin clay": "ing-white-kaolin",
        "very finely powdered sage leaf": "ing-sage-leaf-powder",
        "very finely powdered peppermint leaf": "ing-peppermint-leaf-powder"
      },
      r11: {
        "colloidal oatmeal": "ing-colloidal-oatmeal",
        "marshmallow root powder": "ing-marshmallow-root-powder",
        "chicory-root inulin": "ing-inulin-powder",
        "sunflower lecithin powder": "ing-sunflower-lecithin-powder"
      }
    };

    Object.keys(mappings).forEach(function(recipeId){
      const recipe = document.getElementById(recipeId);
      if(!recipe) return;
      recipe.querySelectorAll("li").forEach(function(li){
        const link = li.querySelector('a.ing-link[data-ingredient]');
        if(link){
          li.dataset.ingredient = String(link.getAttribute('data-ingredient') || '').trim();
          return;
        }
        const strong = li.querySelector("strong");
        if(!strong) return;
        const key = String(strong.textContent || "").trim().toLowerCase();
        const ingredientId = mappings[recipeId][key];
        if(ingredientId) li.dataset.ingredient = ingredientId;
      });
    });
  }

  /* Testing Shaving Gel (r8): promote guar from an open-ended instruction to a
     real formula value while retaining a user-adjustable gel-thickness range.
     This script is loaded after the recipe markup and before baseline-shared.js,
     so the shared batch/conversion engine sees the generated amount element. */
  function enhanceTestingShaveGel(){
    const recipe = document.getElementById("r8");
    if(!recipe || recipe.dataset.guargelReady === "1") return;

    const guarLink = recipe.querySelector('a.ing-link[data-ingredient="ing-guar-gum"]');
    if(!guarLink) return;
    const guarLi = guarLink.closest("li");
    if(!guarLi) return;

    recipe.dataset.guargelReady = "1";
    guarLink.textContent = "Guar Gum";

    const guarAmt = document.createElement("span");
    guarAmt.className = "amt r8-thickness-guar-amt";
    guarAmt.dataset.baseDisplay = "3.0 g";
    guarAmt.dataset.baseMin = "3";
    guarAmt.dataset.baseMax = "3";
    guarAmt.dataset.baseUnit = "g";
    guarAmt.textContent = "3.0 g";
    guarLi.replaceChildren(guarAmt, document.createTextNode(" "), guarLink);
    guarLi.dataset.tip = "Creates a true gel structure. The slider stays within a gel-oriented range rather than dropping to a merely thickened liquid.";

    const controller = document.createElement("div");
    controller.className = "glide-controller";
    controller.setAttribute("aria-label", "Shaving gel thickness control");
    controller.innerHTML = [
      '<div class="glide-control-main">',
      '<div class="glide-slider-head">',
      '<div class="glide-label">Thickness</div>',
      '<div class="glide-readout"><span class="r8-thickness-measure">3 g</span> guar • <span class="r8-thickness-percent">1.25</span>%</div>',
      '</div>',
      '<div class="glide-slider-wrap"><input aria-describedby="r8ThicknessExplain r8ThicknessBreakdown" aria-label="Shaving gel guar gum thickness" class="glide-slider" id="r8Thickness" max="1.6" min="0.8" step="0.05" type="range" value="1.25"/></div>',
      '<div class="glide-scale"><span>Lesser thickness — soft gel</span><span>Greater thickness — firm gel</span></div>',
      '</div>',
      '<div class="glide-control-explainer">',
      '<div class="glide-explain-title">Gel Texture</div>',
      '<p class="glide-explain" id="r8ThicknessExplain">Full gel consistency: structured and cushioning without making the default excessively firm.</p>',
      '<div class="glide-breakdown" id="r8ThicknessBreakdown"><strong>Current batch:</strong> 240 ml water • 2 tbsp slippery elm • 5 ml glycerin • 3 g guar • 1.3 ml jojoba.</div>',
      '</div>'
    ].join("");

    const infoLink = recipe.querySelector(".info-link");
    const ingredientsHeading = Array.from(recipe.querySelectorAll("h4")).find(function(el){
      return String(el.textContent || "").trim().toLowerCase() === "ingredients";
    });
    if(infoLink) infoLink.insertAdjacentElement("afterend", controller);
    else if(ingredientsHeading) ingredientsHeading.insertAdjacentElement("beforebegin", controller);
    else recipe.insertBefore(controller, recipe.firstChild);

    const slider = controller.querySelector("#r8Thickness");
    const measureEl = controller.querySelector(".r8-thickness-measure");
    const percentEls = controller.querySelectorAll(".r8-thickness-percent");
    const explainEl = controller.querySelector("#r8ThicknessExplain");
    const breakdownEl = controller.querySelector("#r8ThicknessBreakdown");

    function fmt(value, digits){
      const n = Number(value);
      if(!Number.isFinite(n)) return "0";
      const places = typeof digits === "number" ? digits : 2;
      return n.toFixed(places).replace(/\.0+$|(?<=\.[0-9]*?)0+$/g, "").replace(/\.$/, "");
    }

    function textureText(percent){
      if(percent <= 0.95) return "Soft gel: still a proper gel, but easier-spreading and less firm.";
      if(percent < 1.4) return "Full gel consistency: structured and cushioning without making the default excessively firm.";
      return "Firm gel: denser, more structured and more resistant to running during shaving.";
    }

    function amountFor(ingredientId){
      const link = recipe.querySelector('a.ing-link[data-ingredient="' + ingredientId + '"]');
      const li = link && link.closest("li");
      const amt = li && li.querySelector(".amt");
      return amt ? String(amt.textContent || "").trim() : "";
    }

    function refreshControllerSummary(){
      if(measureEl) measureEl.textContent = String(guarAmt.textContent || "").trim() || "3 g";
      if(!breakdownEl) return;
      const water = amountFor("ing-water") || "240 ml";
      const slippery = amountFor("ing-slipperyelm") || "2 tbsp";
      const glycerin = amountFor("ing-glycerin") || "5 ml";
      const guar = String(guarAmt.textContent || "").trim() || "3 g";
      const jojoba = amountFor("ing-jojoba") || "1.3 ml";
      breakdownEl.innerHTML = '<strong>Current batch:</strong> ' + water + ' water • ' + slippery + ' slippery elm • ' + glycerin + ' glycerin • ' + guar + ' guar • ' + jojoba + ' jojoba.';
    }

    function syncThickness(){
      const percent = Number(slider.value || 1.25);
      const grams = 240 * (percent / 100);
      const gramsText = fmt(grams, 2);
      const percentText = fmt(percent, 2);

      guarAmt.dataset.baseDisplay = gramsText + " g";
      guarAmt.dataset.baseMin = String(grams);
      guarAmt.dataset.baseMax = String(grams);
      guarAmt.dataset.baseUnit = "g";
      guarAmt.textContent = gramsText + " g";

      percentEls.forEach(function(el){ el.textContent = percentText; });
      if(explainEl) explainEl.textContent = textureText(percent);

      if(typeof recipe.__baselineApplyScaling === "function") recipe.__baselineApplyScaling();
      refreshControllerSummary();
      setTimeout(refreshControllerSummary, 0);
    }

    slider.addEventListener("input", syncThickness);
    slider.addEventListener("change", syncThickness);
    recipe.__baselineRefreshShaveSliderSummary = refreshControllerSummary;
    syncThickness();
  }

  /* Cups/spoons presentation rule:
     - In Measuring Cups & Spoons mode, a clean kitchen measure is primary.
     - The original metric amount is retained in brackets.
     - Awkward kitchen values remain metric-first (the shared engine already does this).
     This post-render pass intentionally touches only metric-origin .amt elements. */
  function installCupsFirstPresentation(){
    if(window.__BASELINE_CUPS_FIRST_PRESENTATION__) return;
    window.__BASELINE_CUPS_FIRST_PRESENTATION__ = true;

    function appProfiles(){
      const app = String((document.body && document.body.dataset && document.body.dataset.app) || "").toLowerCase();
      return app === "food" ? FOOD : SKIN;
    }

    function stripZeros(value){
      return String(value).replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,"");
    }

    function canonicalUnit(raw){
      const u = String(raw || "").trim().toLowerCase();
      if(u === "grams" || u === "gram") return "g";
      if(u === "millilitres" || u === "milliliters" || u === "millilitre" || u === "milliliter") return "ml";
      if(u === "litre" || u === "liter" || u === "litres" || u === "liters") return "l";
      if(u === "kilograms" || u === "kilogram") return "kg";
      return u;
    }

    function toMl(value, unit, profile){
      const u = canonicalUnit(unit);
      if(!Number.isFinite(value)) return null;
      if(u === "ml") return value;
      if(u === "l") return value * 1000;
      if(u === "tsp") return value * MEASURES.ml_per_tsp;
      if(u === "tbsp") return value * MEASURES.ml_per_tbsp;
      if(u === "cup") return value * MEASURES.ml_per_cup;
      if(u === "g"){
        if(profile && typeof profile.g_per_ml === "number" && profile.g_per_ml > 0) return value / profile.g_per_ml;
        return null;
      }
      if(u === "kg") return toMl(value * 1000, "g", profile);
      return null;
    }

    function isNiceFraction(value){
      if(!Number.isFinite(value)) return false;
      const abs = Math.abs(value);
      if(Math.abs(abs - Math.round(abs)) <= 0.02) return true;
      const whole = Math.floor(abs + 1e-9);
      const frac = abs - whole;
      return [2,3,4,8].some(function(d){
        return Math.abs(frac - (Math.round(frac * d) / d)) <= 0.02;
      });
    }

    function fractionGlyph(n, d){
      const glyphs = {
        "1/2":"½", "1/3":"⅓", "2/3":"⅔", "1/4":"¼", "3/4":"¾",
        "1/8":"⅛", "3/8":"⅜", "5/8":"⅝", "7/8":"⅞"
      };
      return glyphs[n + "/" + d] || (n + "/" + d);
    }

    function formatFraction(value){
      if(!Number.isFinite(value)) return "";
      const sign = value < 0 ? "-" : "";
      const abs = Math.abs(value);
      const whole = Math.floor(abs + 1e-9);
      const frac = abs - whole;
      if(frac <= 0.02) return sign + String(Math.round(abs));
      let best = { err:Infinity, n:0, d:1 };
      [2,3,4,8].forEach(function(d){
        const n = Math.round(frac * d);
        const err = Math.abs(frac - (n / d));
        if(err < best.err) best = { err:err, n:n, d:d };
      });
      if(best.n === 0) return sign + String(whole);
      if(best.n === best.d) return sign + String(whole + 1);
      const part = fractionGlyph(best.n, best.d);
      return sign + (whole ? String(whole) + part : part);
    }

    function chooseKitchenUnit(ml){
      if(!Number.isFinite(ml)) return null;
      if(ml >= MEASURES.ml_per_cup / 4) return { unit:"cup", ml:MEASURES.ml_per_cup };
      if(ml >= MEASURES.ml_per_tbsp / 2) return { unit:"tbsp", ml:MEASURES.ml_per_tbsp };
      return { unit:"tsp", ml:MEASURES.ml_per_tsp };
    }

    function kitchenLabel(unit, value){
      if(unit === "cup") return Math.abs(value - 1) < 1e-6 ? "cup" : "cups";
      return unit;
    }

    function formatMetricRange(min, max, unit){
      const u = canonicalUnit(unit);
      function one(v){
        if(u === "g"){
          const rounded = Math.abs(v) >= 1 ? Math.round(v * 10) / 10 : Math.round(v * 100) / 100;
          return stripZeros(rounded.toFixed(Math.abs(v) >= 1 ? 1 : 2));
        }
        if(u === "ml") return stripZeros((Math.round(v * 10) / 10).toFixed(1));
        if(u === "kg" || u === "l"){
          if(Math.abs(v) >= 10) return String(Math.round(v));
          return stripZeros((Math.round(v * 100) / 100).toFixed(2));
        }
        return stripZeros((Math.round(v * 100) / 100).toFixed(2));
      }
      const same = !Number.isFinite(max) || Math.abs(min - max) < 1e-6;
      const text = same ? one(min) : one(min) + "–" + one(max);
      return text + " " + u;
    }

    function ingredientIdFor(span){
      if(span.dataset && span.dataset.ingredient) return span.dataset.ingredient;
      const li = span.closest("li");
      if(li && li.dataset && li.dataset.ingredient) return li.dataset.ingredient;
      const link = li && li.querySelector('a.ing-link[data-ingredient]');
      return link && link.dataset ? link.dataset.ingredient : "";
    }

    function rewriteRecipe(recipe){
      if(!recipe) return;
      const select = recipe.querySelector(".measure-select");
      if(!select || select.value !== "cups"){
        if(typeof recipe.__baselineRefreshShaveSliderSummary === "function") recipe.__baselineRefreshShaveSliderSummary();
        return;
      }
      const multiplierInput = recipe.querySelector(".batch-input");
      const multiplierRaw = multiplierInput ? parseFloat(multiplierInput.value) : 1;
      const multiplier = Number.isFinite(multiplierRaw) && multiplierRaw > 0 ? multiplierRaw : 1;
      const profiles = appProfiles();

      recipe.querySelectorAll(".amt").forEach(function(span){
        const unit = canonicalUnit(span.dataset.baseUnit);
        if(unit !== "g" && unit !== "kg" && unit !== "ml" && unit !== "l") return;
        const baseMin = parseFloat(span.dataset.baseMin);
        const baseMaxRaw = parseFloat(span.dataset.baseMax);
        if(!Number.isFinite(baseMin)) return;
        const baseMax = Number.isFinite(baseMaxRaw) ? baseMaxRaw : baseMin;
        const ingredientId = ingredientIdFor(span);
        const profile = profiles[ingredientId];
        if(!profile) return;

        const scaledMin = baseMin * multiplier;
        const scaledMax = baseMax * multiplier;
        const mlMin = toMl(scaledMin, unit, profile);
        const mlMax = toMl(scaledMax, unit, profile);
        if(mlMin === null || mlMax === null || Math.max(mlMin, mlMax) < 1) return;

        const pick = chooseKitchenUnit(Math.max(mlMin, mlMax));
        if(!pick) return;
        const kMin = mlMin / pick.ml;
        const kMax = mlMax / pick.ml;
        if(!isNiceFraction(kMin) || !isNiceFraction(kMax)) return;

        const same = Math.abs(kMin - kMax) < 1e-6;
        const kitchenQty = same ? formatFraction(kMin) : formatFraction(kMin) + "–" + formatFraction(kMax);
        const kitchenText = kitchenQty + " " + kitchenLabel(pick.unit, same ? kMin : kMax);
        const metricText = formatMetricRange(scaledMin, scaledMax, unit);
        const desired = kitchenText + " (" + metricText + ")";
        if(span.textContent !== desired) span.textContent = desired;
      });

      if(typeof recipe.__baselineRefreshShaveSliderSummary === "function") recipe.__baselineRefreshShaveSliderSummary();
    }

    const pending = new WeakSet();
    function schedule(recipe, delay){
      if(!recipe || pending.has(recipe)) return;
      pending.add(recipe);
      setTimeout(function(){
        pending.delete(recipe);
        rewriteRecipe(recipe);
      }, typeof delay === "number" ? delay : 0);
    }

    document.querySelectorAll(".recipe-page").forEach(function(recipe){
      schedule(recipe, 0);
      const ingredientsLists = Array.from(recipe.querySelectorAll("h4")).filter(function(h){
        return String(h.textContent || "").trim().toLowerCase() === "ingredients";
      }).map(function(h){ return h.nextElementSibling; }).filter(function(el){ return el && el.tagName === "UL"; });
      ingredientsLists.forEach(function(list){
        const observer = new MutationObserver(function(){ schedule(recipe, 0); });
        observer.observe(list, { childList:true, subtree:true, characterData:true });
      });
    });

    document.addEventListener("change", function(event){
      const recipe = event.target && event.target.closest ? event.target.closest(".recipe-page") : null;
      if(recipe) schedule(recipe, 150);
    });
    document.addEventListener("input", function(event){
      const recipe = event.target && event.target.closest ? event.target.closest(".recipe-page") : null;
      if(recipe && (event.target.matches(".batch-input") || event.target.matches(".glide-slider"))) schedule(recipe, 150);
    });
  }

  wireTestingPowderIngredients();
  enhanceTestingShaveGel();

  // baseline-shared.js is loaded immediately after this file. A zero-delay task
  // therefore installs the presentation pass after shared recipe tools are ready.
  if(document.body) setTimeout(installCupsFirstPresentation, 0);
  else document.addEventListener("DOMContentLoaded", function(){ setTimeout(installCupsFirstPresentation, 0); }, { once:true });
})();
