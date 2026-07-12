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
  "id": "usda-sr-legacy-168817",
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
    }
  ],
  "name": "Candies, fudge, chocolate marshmallow, with nuts, prepared-by-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 67.7,
    "energy_kcal": 474.0,
    "fat_g": 21.1,
    "fibre_g": 2.1,
    "folate_ug": 11.0,
    "iron_mg": 1.11,
    "magnesium_mg": 46.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 88.0,
    "potassium_mg": 170.0,
    "protein_g": 3.24,
    "salt_g": 0.1975,
    "sat_fat_g": 10.4,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168817",
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
