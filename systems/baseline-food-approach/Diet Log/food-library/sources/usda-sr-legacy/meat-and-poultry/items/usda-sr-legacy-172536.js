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
  "id": "usda-sr-legacy-172536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
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
  "name": "Veal, variety meats and by-products, lungs, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 435.0,
    "fat_g": 2.64,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.61,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 232.0,
    "potassium_mg": 142.0,
    "protein_g": 18.7,
    "salt_g": 0.14,
    "sat_fat_g": 0.91,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 34.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172536",
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
