/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 6 brands",
  "id": "cofid-current-19-113",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Black pudding, raw",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 14.8,
    "energy_kcal": 277.0,
    "fat_g": 20.6,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 10.9,
    "magnesium_mg": 14.0,
    "omega3_g": 0.16,
    "phosphorus_mg": 70.0,
    "potassium_mg": 95.0,
    "protein_g": 9.1,
    "salt_g": 2.075,
    "sat_fat_g": 7.7,
    "sodium_mg": 830.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-113",
  "state": "Raw",
  "subcategory": "MI",
  "tags": [
    "mi",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
