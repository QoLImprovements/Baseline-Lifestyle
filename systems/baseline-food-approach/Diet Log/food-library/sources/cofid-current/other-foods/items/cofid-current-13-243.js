/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fenugreek leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 4.8,
    "energy_kcal": 35.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 8.8,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 31.0,
    "protein_g": 4.6,
    "salt_g": 0.19,
    "sat_fat_g": 0.0,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 893.0,
    "vitamin_c_mg": 91.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-243",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
