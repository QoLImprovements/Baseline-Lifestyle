/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-170667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "serving-1-bar",
      "kind": "unit",
      "label": "serving 1 bar"
    }
  ],
  "name": "Frozen novelties, KLONDIKE, SLIM-A-BEAR, No Sugar Added, Stickless Bar",
  "nutritionPerBasis": {
    "calcium_mg": 289.0,
    "carbs_g": 26.0,
    "energy_kcal": 242.0,
    "fat_g": 13.0,
    "fibre_g": 3.9,
    "folate_ug": 0.0,
    "iron_mg": 0.41,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.2,
    "salt_g": 0.215,
    "sat_fat_g": 10.4,
    "sodium_mg": 86.0,
    "sugar_g": 8.64,
    "vitamin_a_ug": 289.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170667",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
