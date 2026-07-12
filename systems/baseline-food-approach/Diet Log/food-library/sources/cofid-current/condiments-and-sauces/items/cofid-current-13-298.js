/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Literature sources;",
  "id": "cofid-current-13-298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 3.6,
    "energy_kcal": 27.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 330.0,
    "protein_g": 2.5,
    "salt_g": 0.0625,
    "sat_fat_g": 0.0,
    "sodium_mg": 25.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 71.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-298",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "condiments-and-sauces",
    "dg",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
