/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-360 using 16.7% weight loss",
  "id": "cofid-current-16-485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, wild, baked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 215.0,
    "fat_g": 12.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.61,
    "magnesium_mg": 35.0,
    "omega3_g": 2.64,
    "phosphorus_mg": 300.0,
    "potassium_mg": 458.0,
    "protein_g": 26.5,
    "salt_g": 0.145,
    "sat_fat_g": 2.53,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-485",
  "state": "Baked",
  "subcategory": "JC",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
