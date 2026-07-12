/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-yield-from-1-lb-raw-meat-boneless",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-173848",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "piece-cooked-yield-from-1-lb-raw-meat-boneless",
      "kind": "unit",
      "label": "piece, cooked (yield from 1 lb raw meat, boneless)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Game meat, beefalo, composite of cuts, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 787.0,
    "fat_g": 6.32,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 3.05,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 459.0,
    "protein_g": 30.7,
    "salt_g": 0.205,
    "sat_fat_g": 2.68,
    "sodium_mg": 82.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173848",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
