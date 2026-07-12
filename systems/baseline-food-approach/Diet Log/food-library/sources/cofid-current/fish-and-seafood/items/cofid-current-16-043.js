/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-16-043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flying fish, raw",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 0.0,
    "energy_kcal": 86.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 460.0,
    "protein_g": 21.0,
    "salt_g": 0.1975,
    "sat_fat_g": 0.0,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-043",
  "state": "Raw",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
