/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "ear-medium-6-3-4-to-7-1-2-long-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "ear-medium-6-3-4-to-7-1-2-long-yields",
      "kind": "unit",
      "label": "ear, medium (6-3/4\" to 7-1/2\" long) yields"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "ear-small-5-1-2-to-6-1-2-long",
      "kind": "unit",
      "label": "ear, small (5-1/2\" to 6-1/2\" long)"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "ear-large-7-3-4-to-9-long-yields",
      "kind": "unit",
      "label": "ear, large (7-3/4\" to 9\" long) yields"
    }
  ],
  "name": "Corn, sweet, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 18.7,
    "energy_kcal": 360.0,
    "fat_g": 1.35,
    "fibre_g": 2.0,
    "folate_ug": 42.0,
    "iron_mg": 0.52,
    "magnesium_mg": 37.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 89.0,
    "potassium_mg": 270.0,
    "protein_g": 3.27,
    "salt_g": 0.0375,
    "sat_fat_g": 0.325,
    "sodium_mg": 15.0,
    "sugar_g": 6.26,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169998",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
