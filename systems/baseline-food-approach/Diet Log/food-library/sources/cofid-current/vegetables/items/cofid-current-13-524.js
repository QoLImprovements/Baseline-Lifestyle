/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose",
  "id": "cofid-current-13-524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pepper, capsicum, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.3,
    "energy_kcal": 21.0,
    "fat_g": 0.2,
    "fibre_g": 2.2,
    "folate_ug": 75.0,
    "iron_mg": 0.39,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 216.0,
    "protein_g": 0.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.05,
    "sodium_mg": 1.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 126.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 1.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-524",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
