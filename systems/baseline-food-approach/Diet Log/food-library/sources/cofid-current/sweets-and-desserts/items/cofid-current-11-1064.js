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
  "id": "cofid-current-11-1064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, chocolate eclairs, fresh, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 38.0,
    "energy_kcal": 381.0,
    "fat_g": 24.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.86,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 96.0,
    "protein_g": 4.1,
    "salt_g": 0.215,
    "sat_fat_g": 13.23,
    "sodium_mg": 86.0,
    "sugar_g": 26.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1064",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
