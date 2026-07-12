/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "floweret",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "floweret",
      "kind": "unit",
      "label": "floweret"
    },
    {
      "gramsPerUnit": 588.0,
      "key": "head-medium-5-6-dia",
      "kind": "unit",
      "label": "head medium (5-6\" dia.)"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "head-small-4-dia",
      "kind": "unit",
      "label": "head small (4\" dia.)"
    },
    {
      "gramsPerUnit": 840.0,
      "key": "head-large-6-7-dia",
      "kind": "unit",
      "label": "head large (6-7\" dia.)"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-chopped-1-2-pieces",
      "kind": "unit",
      "label": "cup chopped (1/2\" pieces)"
    }
  ],
  "name": "Cauliflower, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 4.97,
    "energy_kcal": 104.0,
    "fat_g": 0.28,
    "fibre_g": 2.0,
    "folate_ug": 57.0,
    "iron_mg": 0.42,
    "magnesium_mg": 15.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 44.0,
    "potassium_mg": 299.0,
    "protein_g": 1.92,
    "salt_g": 0.075,
    "sat_fat_g": 0.13,
    "sodium_mg": 30.0,
    "sugar_g": 1.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 48.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169986",
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
