/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands, including McCain Homefries and Crispy French Fries, Aunt Bessie's Homestyle Chips and own brands",
  "id": "cofid-current-13-488",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, oven ready, with batter, baked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 35.6,
    "energy_kcal": 202.0,
    "fat_g": 6.1,
    "fibre_g": 3.3,
    "folate_ug": 13.0,
    "iron_mg": 0.7,
    "magnesium_mg": 32.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 111.0,
    "potassium_mg": 602.0,
    "protein_g": 3.4,
    "salt_g": 0.4825,
    "sat_fat_g": 1.3,
    "sodium_mg": 193.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-488",
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
