/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-3-5-fl-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-170260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "serving-3-5-fl-oz-bar",
      "kind": "unit",
      "label": "serving 3.5 fl oz bar"
    }
  ],
  "name": "Frozen novelties, KLONDIKE, SLIM-A-BEAR Fudge Bar, 98% fat free, no sugar added",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 30.1,
    "energy_kcal": 124.0,
    "fat_g": 1.88,
    "fibre_g": 6.0,
    "folate_ug": 0.0,
    "iron_mg": 0.71,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.31,
    "salt_g": 0.3,
    "sat_fat_g": 1.0,
    "sodium_mg": 120.0,
    "sugar_g": 7.1,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170260",
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
