/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-cooked-yield-from-1-lb-raw-meat",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Veal, cubed for stew (leg and shoulder), separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 0.0,
    "energy_kcal": 787.0,
    "fat_g": 4.31,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.44,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 342.0,
    "protein_g": 34.9,
    "salt_g": 0.2325,
    "sat_fat_g": 1.3,
    "sodium_mg": 93.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175289",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
