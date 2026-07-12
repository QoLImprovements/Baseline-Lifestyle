/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-167974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.1,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "package-2-5-oz",
      "kind": "unit",
      "label": "package (2.5 oz)"
    }
  ],
  "name": "Candies, caramels",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 77.0,
    "energy_kcal": 382.0,
    "fat_g": 8.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 214.0,
    "protein_g": 4.6,
    "salt_g": 0.6125,
    "sat_fat_g": 2.48,
    "sodium_mg": 245.0,
    "sugar_g": 65.5,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167974",
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
