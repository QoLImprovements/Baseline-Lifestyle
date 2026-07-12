/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "individual-3-5-fl-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "individual-3-5-fl-oz",
      "kind": "unit",
      "label": "individual (3.5 fl oz)"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Ice creams, strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 27.6,
    "energy_kcal": 803.0,
    "fat_g": 8.4,
    "fibre_g": 0.9,
    "folate_ug": 12.0,
    "iron_mg": 0.21,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 188.0,
    "protein_g": 3.2,
    "salt_g": 0.15,
    "sat_fat_g": 5.19,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168810",
  "state": "Raw",
  "subcategory": "Sweets",
  "tags": [
    "raw",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
