/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty-cooked-from-4-oz-raw",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "patty-cooked-from-4-oz-raw",
      "kind": "unit",
      "label": "patty (cooked from 4 oz raw)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bison, ground, grass-fed, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.05,
    "energy_kcal": 611.0,
    "fat_g": 7.21,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 2.78,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 194.0,
    "potassium_mg": 328.0,
    "protein_g": 20.2,
    "salt_g": 0.175,
    "sat_fat_g": 2.92,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175293",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
