/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "container-refrigerated-4-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "container-refrigerated-4-oz",
      "kind": "unit",
      "label": "container refrigerated, 4 oz"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "container-shelf-stable-3-5-oz",
      "kind": "unit",
      "label": "container shelf stable, 3.5 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Puddings, chocolate, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 23.0,
    "energy_kcal": 142.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.27,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 56.0,
    "potassium_mg": 184.0,
    "protein_g": 2.09,
    "salt_g": 0.38,
    "sat_fat_g": 1.26,
    "sodium_mg": 152.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168778",
  "state": "Ready-to-eat",
  "subcategory": "Sweets",
  "tags": [
    "ready-to-eat",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
