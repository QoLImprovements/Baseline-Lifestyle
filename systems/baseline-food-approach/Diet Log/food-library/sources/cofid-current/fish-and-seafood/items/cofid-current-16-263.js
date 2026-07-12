/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-16-263",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squid, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.2,
    "energy_kcal": 81.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.5,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 280.0,
    "protein_g": 15.4,
    "salt_g": 0.275,
    "sat_fat_g": 0.4,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-263",
  "state": "Raw",
  "subcategory": "JM",
  "tags": [
    "fish-and-seafood",
    "jm",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
