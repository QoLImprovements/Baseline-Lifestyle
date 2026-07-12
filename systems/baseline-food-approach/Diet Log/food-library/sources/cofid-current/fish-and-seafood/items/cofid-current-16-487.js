/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-360 using 12.7% weight loss",
  "id": "cofid-current-16-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, wild, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 206.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.58,
    "magnesium_mg": 34.0,
    "omega3_g": 2.52,
    "phosphorus_mg": 286.0,
    "potassium_mg": 437.0,
    "protein_g": 25.3,
    "salt_g": 0.1375,
    "sat_fat_g": 2.42,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-487",
  "state": "Steamed",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
