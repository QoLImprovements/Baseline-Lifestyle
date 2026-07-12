/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products. Salmon that has been smoked over heat, flesh only",
  "id": "cofid-current-16-413",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, smoked (hot-smoked)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.3,
    "energy_kcal": 186.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.34,
    "magnesium_mg": 32.0,
    "omega3_g": 2.28,
    "phosphorus_mg": 293.0,
    "potassium_mg": 460.0,
    "protein_g": 25.4,
    "salt_g": 2.12,
    "sat_fat_g": 1.94,
    "sodium_mg": 848.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-413",
  "state": "Unspecified",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
