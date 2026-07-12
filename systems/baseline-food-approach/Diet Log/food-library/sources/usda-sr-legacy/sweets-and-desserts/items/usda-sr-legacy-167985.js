/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-snack-size",
  "description": "Sweets",
  "id": "usda-sr-legacy-167985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "bar-snack-size",
      "kind": "unit",
      "label": "bar snack size"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "bar-2-oz",
      "kind": "unit",
      "label": "bar 2 oz"
    }
  ],
  "name": "Candies, 5TH AVENUE Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 62.7,
    "energy_kcal": 2020.0,
    "fat_g": 24.0,
    "fibre_g": 3.1,
    "folate_ug": 36.0,
    "iron_mg": 1.2,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 347.0,
    "protein_g": 8.78,
    "salt_g": 0.5625,
    "sat_fat_g": 6.65,
    "sodium_mg": 225.0,
    "sugar_g": 47.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167985",
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
