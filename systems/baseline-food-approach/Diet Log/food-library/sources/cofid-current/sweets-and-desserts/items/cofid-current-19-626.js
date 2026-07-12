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
  "id": "cofid-current-19-626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shepherd's pie, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.5,
    "energy_kcal": 107.0,
    "fat_g": 5.4,
    "fibre_g": 0.9,
    "folate_ug": 9.0,
    "iron_mg": 0.61,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 263.0,
    "protein_g": 5.9,
    "salt_g": 0.5825,
    "sat_fat_g": 2.04,
    "sodium_mg": 233.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-626",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
