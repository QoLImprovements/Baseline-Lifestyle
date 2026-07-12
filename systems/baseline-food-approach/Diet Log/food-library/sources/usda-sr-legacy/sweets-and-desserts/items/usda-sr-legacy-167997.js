/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-2-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167997",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "bar-2-oz",
      "kind": "unit",
      "label": "bar 2 oz"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "serving-fun-size-bar",
      "kind": "unit",
      "label": "serving fun size bar"
    }
  ],
  "name": "Candies, NESTLE, OH HENRY! Bar",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 65.5,
    "energy_kcal": 462.0,
    "fat_g": 23.0,
    "fibre_g": 1.9,
    "folate_ug": 44.0,
    "iron_mg": 0.5,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 259.0,
    "protein_g": 7.7,
    "salt_g": 0.4825,
    "sat_fat_g": 9.6,
    "sodium_mg": 193.0,
    "sugar_g": 46.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.21,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167997",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
