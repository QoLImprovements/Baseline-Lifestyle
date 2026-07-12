/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-170277",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.9,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sweetener, syrup, agave",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 76.4,
    "energy_kcal": 1300.0,
    "fat_g": 0.45,
    "fibre_g": 0.2,
    "folate_ug": 30.0,
    "iron_mg": 0.09,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 4.0,
    "protein_g": 0.09,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 68.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170277",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
