/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168289",
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
      "gramsPerUnit": 376.0,
      "key": "piece-cooked-yield-from-1-lb-unheated-product",
      "kind": "unit",
      "label": "piece, cooked (yield from 1 lb unheated product)"
    }
  ],
  "name": "Pork, cured, shoulder, blade roll, separable lean and fat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.37,
    "energy_kcal": 1200.0,
    "fat_g": 23.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.89,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 194.0,
    "protein_g": 17.3,
    "salt_g": 2.4325,
    "sat_fat_g": 8.38,
    "sodium_mg": 973.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168289",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
