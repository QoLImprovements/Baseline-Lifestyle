/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "head-small-4-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 325.0,
      "key": "head-small-4-dia",
      "kind": "unit",
      "label": "head, small (4\" dia)"
    },
    {
      "gramsPerUnit": 431.0,
      "key": "head-medium-5-6-dia",
      "kind": "unit",
      "label": "head, medium (5-6\" dia)"
    },
    {
      "gramsPerUnit": 511.0,
      "key": "head-large-6-7-dia",
      "kind": "unit",
      "label": "head, large (6-7\" dia)"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "floweret",
      "kind": "unit",
      "label": "floweret"
    }
  ],
  "name": "Cauliflower, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 6.09,
    "energy_kcal": 130.0,
    "fat_g": 0.3,
    "fibre_g": 3.2,
    "folate_ug": 57.0,
    "iron_mg": 0.73,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 300.0,
    "protein_g": 2.95,
    "salt_g": 0.0575,
    "sat_fat_g": 0.047,
    "sodium_mg": 23.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 88.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 20.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169389",
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
