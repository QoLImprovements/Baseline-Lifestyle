/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products, straight cut and crinkle cut",
  "id": "cofid-current-13-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, oven ready, no batter, baked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 35.3,
    "energy_kcal": 189.0,
    "fat_g": 4.9,
    "fibre_g": 3.5,
    "folate_ug": 22.0,
    "iron_mg": 0.72,
    "magnesium_mg": 31.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 95.0,
    "potassium_mg": 641.0,
    "protein_g": 3.2,
    "salt_g": 0.0775,
    "sat_fat_g": 0.78,
    "sodium_mg": 31.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-487",
  "state": "Baked",
  "subcategory": "DAP",
  "tags": [
    "baked",
    "dap",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
