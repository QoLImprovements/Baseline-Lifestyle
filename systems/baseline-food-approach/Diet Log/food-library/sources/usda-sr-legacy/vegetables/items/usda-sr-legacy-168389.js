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
  "id": "usda-sr-legacy-168389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "spear-extra-large-8-3-4-to-10-long",
      "kind": "unit",
      "label": "spear, extra large (8-3/4\" to 10\" long)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "spear-large-7-1-4-to-8-1-2",
      "kind": "unit",
      "label": "spear, large (7-1/4\" to 8-1/2\")"
    },
    {
      "gramsPerUnit": 3.5,
      "key": "spear-tip-2-long-or-less",
      "kind": "unit",
      "label": "spear tip (2\" long or less)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "spear-medium-5-1-4-to-7-long",
      "kind": "unit",
      "label": "spear, medium (5-1/4\" to 7\" long)"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "spear-small-5-long-or-less",
      "kind": "unit",
      "label": "spear, small (5\" long or less)"
    }
  ],
  "name": "Asparagus, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.88,
    "energy_kcal": 20.0,
    "fat_g": 0.12,
    "fibre_g": 2.1,
    "folate_ug": 52.0,
    "iron_mg": 2.14,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 202.0,
    "protein_g": 2.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.04,
    "sodium_mg": 2.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 41.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168389",
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
