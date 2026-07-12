/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-sandwich",
  "description": "Sweets",
  "id": "usda-sr-legacy-170666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "serving-1-sandwich",
      "kind": "unit",
      "label": "serving 1 sandwich"
    }
  ],
  "name": "Frozen novelties, KLONDIKE, SLIM-A-BEAR Vanilla Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 42.8,
    "energy_kcal": 1000.0,
    "fat_g": 5.85,
    "fibre_g": 4.3,
    "folate_ug": 0.0,
    "iron_mg": 0.38,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.9,
    "salt_g": 0.4775,
    "sat_fat_g": 3.25,
    "sodium_mg": 191.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170666",
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
