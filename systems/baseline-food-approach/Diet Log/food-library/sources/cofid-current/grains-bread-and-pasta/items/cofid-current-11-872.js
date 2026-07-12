/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "5 samples, 3 products",
  "id": "cofid-current-11-872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, wild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 75.8,
    "energy_kcal": 343.0,
    "fat_g": 1.1,
    "fibre_g": 4.3,
    "folate_ug": 65.0,
    "iron_mg": 1.27,
    "magnesium_mg": 108.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 377.0,
    "potassium_mg": 326.0,
    "protein_g": 12.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.25,
    "sodium_mg": 4.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-872",
  "state": "Raw",
  "subcategory": "AC",
  "tags": [
    "ac",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
