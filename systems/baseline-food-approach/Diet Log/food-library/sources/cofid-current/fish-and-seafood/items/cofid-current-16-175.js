/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "35 fish, purchased whole over the year",
  "id": "cofid-current-16-175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herring, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 0.0,
    "energy_kcal": 190.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.2,
    "magnesium_mg": 32.0,
    "omega3_g": 1.83,
    "phosphorus_mg": 230.0,
    "potassium_mg": 320.0,
    "protein_g": 17.8,
    "salt_g": 0.3,
    "sat_fat_g": 3.65,
    "sodium_mg": 120.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-175",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
