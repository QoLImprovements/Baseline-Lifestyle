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

  /* Helpers for creating “volume ↔ weight” support */
  function withDerived(profile){
    const p = Object.assign({}, profile);

    const tbsp_per_cup = MEASURES.ml_per_cup / MEASURES.ml_per_tbsp; // 250/15 ≈ 16.6667

    // If a profile defines a volume→weight anchor (cup/tbsp/tsp) but not density,
    // derive g_per_ml so ml/l conversions work consistently.
    if (typeof p.g_per_ml !== "number"){
      if (typeof p.g_per_cup === "number"){
        p.g_per_ml = p.g_per_cup / MEASURES.ml_per_cup;
      }else if (typeof p.g_per_tbsp === "number"){
        p.g_per_ml = p.g_per_tbsp / MEASURES.ml_per_tbsp;
      }else if (typeof p.g_per_tsp === "number"){
        p.g_per_ml = p.g_per_tsp / MEASURES.ml_per_tsp;
      }
    }

    // If g_per_ml is provided, derive tsp/tbsp/cup weights (where useful)
    if (typeof p.g_per_ml === "number"){
      if (typeof p.g_per_tsp !== "number") p.g_per_tsp = p.g_per_ml * MEASURES.ml_per_tsp;
      if (typeof p.g_per_tbsp !== "number") p.g_per_tbsp = p.g_per_ml * MEASURES.ml_per_tbsp;
      if (typeof p.g_per_cup !== "number") p.g_per_cup = p.g_per_ml * MEASURES.ml_per_cup;
    }

    // If cup exists but tbsp/tsp missing, derive them
    if (typeof p.g_per_cup === "number" && typeof p.g_per_tbsp !== "number"){
      p.g_per_tbsp = p.g_per_cup / tbsp_per_cup;
    }
    if (typeof p.g_per_tbsp === "number" && typeof p.g_per_tsp !== "number"){
      p.g_per_tsp = p.g_per_tbsp / 3;
    }

    // If tsp-only provided, derive tbsp/cup
    if (typeof p.g_per_tsp === "number" && typeof p.g_per_tbsp !== "number"){
      p.g_per_tbsp = p.g_per_tsp * 3;
    }
    if (typeof p.g_per_tbsp === "number" && typeof p.g_per_cup !== "number"){
      p.g_per_cup = p.g_per_tbsp * tbsp_per_cup;
    }

    // Drops: derive grams per drop if density given
    if (typeof p.ml_per_drop !== "number") p.ml_per_drop = MEASURES.ml_per_drop;
    if (typeof p.g_per_drop !== "number" && typeof p.g_per_ml === "number"){
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

    /* Defaults / catch-alls */
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

    "ing-carnauba": withDerived({
      label: "Carnauba wax",
      g_per_ml: 0.97,
      notes: "Typically measured by weight (g). Density is provided so Volume mode can still render consistently."
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

    /* Carrier oils */
    "ing-olive": withDerived({
      label: "Olive oil",
      g_per_ml: 0.91
    }),
    "ing-avocado": withDerived({
      label: "Avocado oil",
      g_per_ml: 0.91
    }),
    "ing-argan": withDerived({
      label: "Argan oil",
      g_per_ml: 0.91
    }),
    "ing-jojoba": withDerived({
      label: "Jojoba oil",
      g_per_ml: 0.87
    }),
    "ing-watermelon": withDerived({
      label: "Watermelon seed oil",
      g_per_ml: 0.92
    }),
    "ing-fractionated-coconut": withDerived({
      label: "Fractionated coconut oil",
      g_per_ml: 0.95,
      notes: "Light liquid coconut fraction with quick spread and a cleaner finish than regular coconut oil."
    }),
    "ing-mct": withDerived({
      label: "MCT oil",
      g_per_ml: 0.95
    }),
    "ing-castor": withDerived({
      label: "Castor oil",
      g_per_ml: 0.96
    }),

    /* Actives + additions */
    "ing-glycerin": withDerived({
      label: "Vegetable glycerin",
      g_per_ml: 1.26
    }),
    "ing-vitamin-e": withDerived({
      label: "Vitamin E (tocopherol)",
      g_per_ml: 0.95
    }),

    /* Hydrosols / waters */
    "ing-water": withDerived({
      label: "Water",
      g_per_ml: 1.0
    }),
    "ing-witchhazel": withDerived({
      label: "Witch hazel",
      g_per_ml: 1.0
    }),
    "ing-rosewater": withDerived({
      label: "Rose water",
      g_per_ml: 1.0
    }),
    "ing-cucumber-hydrosol": withDerived({
      label: "Cucumber hydrosol",
      g_per_ml: 1.0
    }),
    "ing-cucumber": withDerived({
      label: "Cucumber juice",
      g_per_ml: 1.0
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
      notes: "Extremely variable; small doses are hard to weigh precisely."
    }),

    /* Salts / household */
    "ing-epsom": withDerived({
      label: "Epsom salt",
      g_per_tbsp: 15,
      notes: "Crystal size varies."
    }),
    "ing-vinegar": withDerived({
      label: "Apple cider vinegar",
      g_per_ml: 1.01
    }),

    /* Essential oils */
    "ing-lavender": withDerived({
      label: "Lavender essential oil",
      // Keep explicit drop weight to match your “immeasurable but acknowledged” note.
      g_per_drop: 0.04,
      notes: "Displayed as drops, with approximate weight in brackets."
    })
  };

  window.BASELINE_MEASURE_CONSTANTS = MEASURES;
  window.BASELINE_INGREDIENT_PROFILES = {
    food: FOOD,
    skin: SKIN
  };
})();
