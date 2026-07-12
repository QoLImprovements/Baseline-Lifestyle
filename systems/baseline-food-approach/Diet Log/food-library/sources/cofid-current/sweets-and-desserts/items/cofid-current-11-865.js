/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products",
  "id": "cofid-current-11-865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, white, pudding, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 85.6,
    "energy_kcal": 352.0,
    "fat_g": 0.9,
    "fibre_g": 1.0,
    "folate_ug": 14.0,
    "iron_mg": 0.19,
    "magnesium_mg": 26.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 106.0,
    "potassium_mg": 84.0,
    "protein_g": 5.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.22,
    "sodium_mg": 1.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-865",
  "state": "Raw",
  "subcategory": "AC",
  "tags": [
    "ac",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
