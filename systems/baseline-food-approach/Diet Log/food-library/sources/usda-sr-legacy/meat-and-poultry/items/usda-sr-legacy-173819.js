/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-173819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    }
  ],
  "name": "Veal, leg (top round), separable lean and fat, cooked, pan-fried, breaded",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 9.91,
    "energy_kcal": 994.0,
    "fat_g": 9.18,
    "fibre_g": 0.3,
    "folate_ug": 27.0,
    "iron_mg": 1.64,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 371.0,
    "protein_g": 27.3,
    "salt_g": 1.135,
    "sat_fat_g": 3.06,
    "sodium_mg": 454.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173819",
  "state": "Fried",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "fried",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
