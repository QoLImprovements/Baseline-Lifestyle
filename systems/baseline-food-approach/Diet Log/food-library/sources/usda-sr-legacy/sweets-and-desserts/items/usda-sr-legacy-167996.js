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
  "id": "usda-sr-legacy-167996",
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
  "name": "Candies, halavah, plain",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 60.5,
    "energy_kcal": 1960.0,
    "fat_g": 21.5,
    "fibre_g": 4.5,
    "folate_ug": 65.0,
    "iron_mg": 4.53,
    "magnesium_mg": 218.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 607.0,
    "potassium_mg": 187.0,
    "protein_g": 12.5,
    "salt_g": 0.4875,
    "sat_fat_g": 4.13,
    "sodium_mg": 195.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167996",
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
