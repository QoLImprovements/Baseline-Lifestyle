/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Tops and tails removed",
  "id": "cofid-current-14-103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gooseberries, dessert, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.2,
    "energy_kcal": 40.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 170.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.1,
    "sodium_mg": 1.0,
    "sugar_g": 9.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-103",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
