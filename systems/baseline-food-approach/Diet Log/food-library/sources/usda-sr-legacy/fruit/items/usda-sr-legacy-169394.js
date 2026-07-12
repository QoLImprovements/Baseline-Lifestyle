/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "medium-4-1-2-long",
      "kind": "unit",
      "label": "medium (4-1/2\" long)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "large-5-long",
      "kind": "unit",
      "label": "large (5\" long)"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "small-4-long",
      "kind": "unit",
      "label": "small (4\" long)"
    }
  ],
  "name": "Pepper, banana, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.35,
    "energy_kcal": 27.0,
    "fat_g": 0.45,
    "fibre_g": 3.4,
    "folate_ug": 29.0,
    "iron_mg": 0.46,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 256.0,
    "protein_g": 1.66,
    "salt_g": 0.0325,
    "sat_fat_g": 0.048,
    "sodium_mg": 13.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 82.7,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169394",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
