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
  "id": "usda-sr-legacy-169608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "container-refrigerated-4-oz",
      "kind": "unit",
      "label": "container refrigerated 4 oz"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "container-shelf-stable-3-5-oz",
      "kind": "unit",
      "label": "container shelf stable 3.5 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Puddings, vanilla, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 22.6,
    "energy_kcal": 130.0,
    "fat_g": 3.78,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.09,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 65.0,
    "protein_g": 1.45,
    "salt_g": 0.43,
    "sat_fat_g": 1.02,
    "sodium_mg": 172.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169608",
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
