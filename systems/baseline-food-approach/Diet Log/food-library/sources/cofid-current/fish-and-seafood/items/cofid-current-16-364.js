/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "5 samples, containing white fish, onions, tomatoes and spices",
  "id": "cofid-current-16-364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, fish, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 1.9,
    "energy_kcal": 139.0,
    "fat_g": 9.6,
    "fibre_g": 2.1,
    "folate_ug": 9.0,
    "iron_mg": 1.05,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 323.0,
    "protein_g": 11.3,
    "salt_g": 1.075,
    "sat_fat_g": 1.72,
    "sodium_mg": 430.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-364",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
