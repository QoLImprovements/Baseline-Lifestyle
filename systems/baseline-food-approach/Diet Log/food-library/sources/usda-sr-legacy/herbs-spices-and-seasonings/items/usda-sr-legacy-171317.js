/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tbsp-leaves",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "tbsp-leaves",
      "kind": "unit",
      "label": "tbsp, leaves"
    },
    {
      "gramsPerUnit": 0.7,
      "key": "tsp-leaves",
      "kind": "unit",
      "label": "tsp, leaves"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    }
  ],
  "name": "Spices, basil, dried",
  "nutritionPerBasis": {
    "calcium_mg": 2240.0,
    "carbs_g": 47.8,
    "energy_kcal": 233.0,
    "fat_g": 4.07,
    "fibre_g": 37.7,
    "folate_ug": 310.0,
    "iron_mg": 89.8,
    "magnesium_mg": 711.0,
    "omega3_g": 0.296,
    "phosphorus_mg": 274.0,
    "potassium_mg": 2630.0,
    "protein_g": 23.0,
    "salt_g": 0.19,
    "sat_fat_g": 2.16,
    "sodium_mg": 76.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 10.7,
    "vitamin_k_ug": 1710.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171317",
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
