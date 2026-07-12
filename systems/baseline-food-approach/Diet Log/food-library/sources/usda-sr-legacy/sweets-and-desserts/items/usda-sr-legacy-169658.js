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
  "id": "usda-sr-legacy-169658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "piece-1-3-4-x-1-1-4-x-1-2",
      "kind": "unit",
      "label": "piece (1-3/4\" x 1-1/4\" x 1/2\")"
    }
  ],
  "name": "Sugars, maple",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 90.9,
    "energy_kcal": 354.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.61,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 274.0,
    "protein_g": 0.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.036,
    "sodium_mg": 11.0,
    "sugar_g": 84.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169658",
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
