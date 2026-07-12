/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products",
  "id": "cofid-current-16-392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crab, white meat, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 0.0,
    "energy_kcal": 85.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.53,
    "magnesium_mg": 34.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 147.0,
    "potassium_mg": 240.0,
    "protein_g": 20.5,
    "salt_g": 0.805,
    "sat_fat_g": 0.04,
    "sodium_mg": 322.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-392",
  "state": "Cooked",
  "subcategory": "JK",
  "tags": [
    "cooked",
    "fish-and-seafood",
    "jk"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
