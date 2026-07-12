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
  "id": "usda-sr-legacy-174349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 399.0,
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
  "name": "Game meat, raccoon, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 255.0,
    "fat_g": 14.5,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 7.1,
    "magnesium_mg": 30.0,
    "omega3_g": 0.183,
    "phosphorus_mg": 261.0,
    "potassium_mg": 398.0,
    "protein_g": 29.2,
    "salt_g": 0.1975,
    "sat_fat_g": 4.07,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174349",
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
