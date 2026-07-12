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
  "id": "usda-sr-legacy-171322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 3.1,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, dill weed, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1780.0,
    "carbs_g": 55.8,
    "energy_kcal": 1060.0,
    "fat_g": 4.36,
    "fibre_g": 13.6,
    "folate_ug": 0.0,
    "iron_mg": 48.8,
    "magnesium_mg": 451.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 543.0,
    "potassium_mg": 3310.0,
    "protein_g": 20.0,
    "salt_g": 0.52,
    "sat_fat_g": 0.234,
    "sodium_mg": 208.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 293.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171322",
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
