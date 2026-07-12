/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, chervil, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1350.0,
    "carbs_g": 49.1,
    "energy_kcal": 237.0,
    "fat_g": 3.9,
    "fibre_g": 11.3,
    "folate_ug": 274.0,
    "iron_mg": 32.0,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 450.0,
    "potassium_mg": 4740.0,
    "protein_g": 23.2,
    "salt_g": 0.2075,
    "sat_fat_g": 0.169,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 293.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171318",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "other-foods",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
