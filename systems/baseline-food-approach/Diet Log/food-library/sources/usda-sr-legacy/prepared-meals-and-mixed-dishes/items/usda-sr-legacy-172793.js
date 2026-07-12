/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "each-pan-dinner-or-small-roll-2-square-2-high",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "each-pan-dinner-or-small-roll-2-square-2-high",
      "kind": "unit",
      "label": "each (pan, dinner, or small roll) (2\" square, 2\" high)"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "roll-foot-long-frankfurter-roll",
      "kind": "unit",
      "label": "roll (foot long frankfurter roll)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "roll-hamburger-frankfurter-onion-roll-bun-large-roll",
      "kind": "unit",
      "label": "roll (hamburger, frankfurter, onion roll, bun, large roll)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "roll-1-oz",
      "kind": "unit",
      "label": "roll (1 oz)"
    }
  ],
  "name": "Rolls, dinner, plain, commercially prepared (includes brown-and-serve)",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 52.0,
    "energy_kcal": 310.0,
    "fat_g": 6.47,
    "fibre_g": 2.0,
    "folate_ug": 101.0,
    "iron_mg": 3.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.225,
    "phosphorus_mg": 122.0,
    "potassium_mg": 139.0,
    "protein_g": 10.9,
    "salt_g": 1.1675,
    "sat_fat_g": 1.38,
    "sodium_mg": 467.0,
    "sugar_g": 5.55,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172793",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
