/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "bar-3-oz",
      "kind": "unit",
      "label": "bar (3 oz)"
    }
  ],
  "name": "Candies, carob, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 303.0,
    "carbs_g": 56.3,
    "energy_kcal": 540.0,
    "fat_g": 31.4,
    "fibre_g": 3.8,
    "folate_ug": 21.0,
    "iron_mg": 1.29,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 633.0,
    "protein_g": 8.15,
    "salt_g": 0.2675,
    "sat_fat_g": 29.0,
    "sodium_mg": 107.0,
    "sugar_g": 34.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167973",
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
