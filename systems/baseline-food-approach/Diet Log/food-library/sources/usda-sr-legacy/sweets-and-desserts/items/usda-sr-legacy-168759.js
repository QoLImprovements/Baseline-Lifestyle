/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-1-9-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "package-1-9-oz",
      "kind": "unit",
      "label": "package 1.9 oz"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "bar-snack-size",
      "kind": "unit",
      "label": "bar snack size"
    }
  ],
  "name": "Candies, MOUNDS Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 58.9,
    "energy_kcal": 2060.0,
    "fat_g": 26.6,
    "fibre_g": 3.7,
    "folate_ug": 6.0,
    "iron_mg": 2.09,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 321.0,
    "protein_g": 4.6,
    "salt_g": 0.3625,
    "sat_fat_g": 20.6,
    "sodium_mg": 145.0,
    "sugar_g": 46.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168759",
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
