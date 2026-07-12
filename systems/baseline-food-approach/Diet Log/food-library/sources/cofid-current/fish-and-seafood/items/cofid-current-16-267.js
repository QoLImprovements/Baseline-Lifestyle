/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from raw",
  "id": "cofid-current-16-267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squid, dried",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 4.8,
    "energy_kcal": 313.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.0,
    "magnesium_mg": 120.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 620.0,
    "potassium_mg": 610.0,
    "protein_g": 63.3,
    "salt_g": 2.35,
    "sat_fat_g": 1.0,
    "sodium_mg": 940.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-267",
  "state": "Dried",
  "subcategory": "JM",
  "tags": [
    "dried",
    "fish-and-seafood",
    "jm"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
