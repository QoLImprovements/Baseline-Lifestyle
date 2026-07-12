/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Boiled in fresh water",
  "id": "cofid-current-16-332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lobster, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 0.0,
    "energy_kcal": 103.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 260.0,
    "protein_g": 22.1,
    "salt_g": 0.825,
    "sat_fat_g": 0.2,
    "sodium_mg": 330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-332",
  "state": "Boiled",
  "subcategory": "JK",
  "tags": [
    "boiled",
    "fish-and-seafood",
    "jk"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
