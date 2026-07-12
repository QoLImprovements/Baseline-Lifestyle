/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-cone",
  "description": "Sweets",
  "id": "usda-sr-legacy-170665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "serving-1-cone",
      "kind": "unit",
      "label": "serving 1 cone"
    }
  ],
  "name": "Frozen novelties, KLONDIKE, SLIM-A-BEAR Chocolate Cone",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 45.3,
    "energy_kcal": 938.0,
    "fat_g": 4.1,
    "fibre_g": 4.3,
    "folate_ug": 0.0,
    "iron_mg": 0.75,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.09,
    "salt_g": 0.3975,
    "sat_fat_g": 1.0,
    "sodium_mg": 159.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 259.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170665",
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
