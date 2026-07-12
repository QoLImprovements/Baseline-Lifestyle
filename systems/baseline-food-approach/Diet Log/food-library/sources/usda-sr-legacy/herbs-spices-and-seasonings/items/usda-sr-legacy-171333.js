/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 3.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, rosemary, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1280.0,
    "carbs_g": 64.1,
    "energy_kcal": 1390.0,
    "fat_g": 15.2,
    "fibre_g": 42.6,
    "folate_ug": 307.0,
    "iron_mg": 29.2,
    "magnesium_mg": 220.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 955.0,
    "protein_g": 4.88,
    "salt_g": 0.125,
    "sat_fat_g": 7.37,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 156.0,
    "vitamin_c_mg": 61.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171333",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "herbs-spices-and-seasonings",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
