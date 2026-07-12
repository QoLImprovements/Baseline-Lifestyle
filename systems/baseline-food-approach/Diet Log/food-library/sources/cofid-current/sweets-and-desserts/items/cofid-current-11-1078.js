/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "recipe",
  "id": "cofid-current-11-1078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, with pie filling, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 31.1,
    "energy_kcal": 277.0,
    "fat_g": 16.4,
    "fibre_g": 1.8,
    "folate_ug": 2.0,
    "iron_mg": 1.04,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 94.0,
    "protein_g": 3.2,
    "salt_g": 0.3475,
    "sat_fat_g": 0.0,
    "sodium_mg": 139.0,
    "sugar_g": 8.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1078",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
