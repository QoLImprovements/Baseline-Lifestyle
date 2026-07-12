/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "flesh only",
  "id": "cofid-current-13-397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yam, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 28.2,
    "energy_kcal": 114.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 380.0,
    "protein_g": 1.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.1,
    "sodium_mg": 2.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-397",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
