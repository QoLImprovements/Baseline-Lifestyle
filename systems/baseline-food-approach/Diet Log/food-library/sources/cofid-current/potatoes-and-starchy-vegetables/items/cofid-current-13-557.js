/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 2 brands; cooked as packet directions",
  "id": "cofid-current-13-557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, microwave, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 32.1,
    "energy_kcal": 221.0,
    "fat_g": 9.6,
    "fibre_g": 2.9,
    "folate_ug": 20.0,
    "iron_mg": 1.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 530.0,
    "protein_g": 3.6,
    "salt_g": 0.1,
    "sat_fat_g": 0.55,
    "sodium_mg": 40.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-557",
  "state": "Cooked",
  "subcategory": "DAP",
  "tags": [
    "cooked",
    "dap",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
