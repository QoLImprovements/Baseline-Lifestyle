/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "ear-small-5-1-2-to-6-1-2-long",
      "kind": "unit",
      "label": "ear small (5-1/2\" to 6-1/2\" long)"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "baby-ear",
      "kind": "unit",
      "label": "baby ear"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "ear-large-7-3-4-to-9-long",
      "kind": "unit",
      "label": "ear large (7-3/4\" to 9\" long)"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "ear-medium-6-3-4-to-7-1-2-long",
      "kind": "unit",
      "label": "ear medium (6-3/4\" to 7-1/2\" long)"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "ear-yields",
      "kind": "unit",
      "label": "ear, yields"
    }
  ],
  "name": "Corn, sweet, yellow, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 21.0,
    "energy_kcal": 401.0,
    "fat_g": 1.5,
    "fibre_g": 2.4,
    "folate_ug": 23.0,
    "iron_mg": 0.45,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 218.0,
    "protein_g": 3.41,
    "salt_g": 0.6325,
    "sat_fat_g": 0.197,
    "sodium_mg": 253.0,
    "sugar_g": 4.54,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168525",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
