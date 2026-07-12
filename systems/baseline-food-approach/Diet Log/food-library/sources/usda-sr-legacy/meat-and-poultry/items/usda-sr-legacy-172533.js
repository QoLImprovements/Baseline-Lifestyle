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
  "id": "usda-sr-legacy-172533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 322.0,
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
  "name": "Lamb, variety meats and by-products, liver, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.78,
    "energy_kcal": 996.0,
    "fat_g": 12.6,
    "fibre_g": 0.0,
    "folate_ug": 400.0,
    "iron_mg": 10.2,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 427.0,
    "potassium_mg": 352.0,
    "protein_g": 25.5,
    "salt_g": 0.31,
    "sat_fat_g": 4.9,
    "sodium_mg": 124.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7780.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172533",
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
