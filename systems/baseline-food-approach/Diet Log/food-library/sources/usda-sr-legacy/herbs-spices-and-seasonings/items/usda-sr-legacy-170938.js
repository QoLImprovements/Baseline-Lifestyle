/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp-leaves",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170938",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "tsp-leaves",
      "kind": "unit",
      "label": "tsp, leaves"
    },
    {
      "gramsPerUnit": 4.3,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    },
    {
      "gramsPerUnit": 2.7,
      "key": "tbsp-leaves",
      "kind": "unit",
      "label": "tbsp, leaves"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    }
  ],
  "name": "Spices, thyme, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1890.0,
    "carbs_g": 63.9,
    "energy_kcal": 276.0,
    "fat_g": 7.43,
    "fibre_g": 37.0,
    "folate_ug": 274.0,
    "iron_mg": 124.0,
    "magnesium_mg": 220.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 814.0,
    "protein_g": 9.11,
    "salt_g": 0.1375,
    "sat_fat_g": 2.73,
    "sodium_mg": 55.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 7.48,
    "vitamin_k_ug": 1710.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170938",
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
