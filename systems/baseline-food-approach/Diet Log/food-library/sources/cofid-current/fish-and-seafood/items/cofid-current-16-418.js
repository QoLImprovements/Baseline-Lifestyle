/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, large bones removed. Includes skin and some bones",
  "id": "cofid-current-16-418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, red, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 0.0,
    "energy_kcal": 160.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.68,
    "magnesium_mg": 29.0,
    "omega3_g": 1.65,
    "phosphorus_mg": 291.0,
    "potassium_mg": 305.0,
    "protein_g": 23.5,
    "salt_g": 1.075,
    "sat_fat_g": 1.43,
    "sodium_mg": 430.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-418",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
