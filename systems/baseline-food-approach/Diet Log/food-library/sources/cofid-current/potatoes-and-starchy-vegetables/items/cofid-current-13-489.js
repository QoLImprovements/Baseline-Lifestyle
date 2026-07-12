/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, including white and red varieties, pre-packed and loose",
  "id": "cofid-current-13-489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, raw, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 19.6,
    "energy_kcal": 82.0,
    "fat_g": 0.1,
    "fibre_g": 2.0,
    "folate_ug": 13.0,
    "iron_mg": 0.32,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 443.0,
    "protein_g": 1.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.03,
    "sodium_mg": 2.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.94
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-489",
  "state": "Raw",
  "subcategory": "DAM",
  "tags": [
    "dam",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
