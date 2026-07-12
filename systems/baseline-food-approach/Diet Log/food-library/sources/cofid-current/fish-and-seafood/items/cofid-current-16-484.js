/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-357 using edible conversion factor of 0.87",
  "id": "cofid-current-16-484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, grilled, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 208.0,
    "fat_g": 13.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.39,
    "magnesium_mg": 26.0,
    "omega3_g": 2.88,
    "phosphorus_mg": 228.0,
    "potassium_mg": 358.0,
    "protein_g": 21.4,
    "salt_g": 0.1075,
    "sat_fat_g": 2.57,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-484",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
