/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-169588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "20-pieces",
      "kind": "unit",
      "label": "20 pieces"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, sesame crunch",
  "nutritionPerBasis": {
    "calcium_mg": 639.0,
    "carbs_g": 50.3,
    "energy_kcal": 516.0,
    "fat_g": 33.3,
    "fibre_g": 7.7,
    "folate_ug": 51.0,
    "iron_mg": 4.27,
    "magnesium_mg": 251.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 412.0,
    "potassium_mg": 307.0,
    "protein_g": 11.6,
    "salt_g": 0.4175,
    "sat_fat_g": 4.66,
    "sodium_mg": 167.0,
    "sugar_g": 31.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169588",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
