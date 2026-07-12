/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, game, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 34.7,
    "energy_kcal": 381.0,
    "fat_g": 22.5,
    "fibre_g": 0.0,
    "folate_ug": 75.0,
    "iron_mg": 2.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 170.0,
    "protein_g": 12.2,
    "salt_g": 1.075,
    "sat_fat_g": 7.9,
    "sodium_mg": 430.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 625.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-058",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
