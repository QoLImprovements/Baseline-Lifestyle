/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, fresh steaks",
  "id": "cofid-current-16-360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, wild, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 179.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.51,
    "magnesium_mg": 29.0,
    "omega3_g": 2.2,
    "phosphorus_mg": 250.0,
    "potassium_mg": 382.0,
    "protein_g": 22.1,
    "salt_g": 0.12,
    "sat_fat_g": 2.11,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-360",
  "state": "Raw",
  "subcategory": "J",
  "tags": [
    "fish-and-seafood",
    "j",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
