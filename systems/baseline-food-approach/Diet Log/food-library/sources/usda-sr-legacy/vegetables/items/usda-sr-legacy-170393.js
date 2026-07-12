/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-grated",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "cup-grated",
      "kind": "unit",
      "label": "cup grated"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "strip-large-3-long",
      "kind": "unit",
      "label": "strip large (3\" long)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "small-5-1-2-long",
      "kind": "unit",
      "label": "small (5-1/2\" long)"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "large-7-1-4-to-8-1-2-long",
      "kind": "unit",
      "label": "large (7-1/4\" to 8-/1/2\" long)"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "strip-medium",
      "kind": "unit",
      "label": "strip medium"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-strips-or-slices",
      "kind": "unit",
      "label": "cup strips or slices"
    }
  ],
  "name": "Carrots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 9.58,
    "energy_kcal": 41.0,
    "fat_g": 0.24,
    "fibre_g": 2.8,
    "folate_ug": 19.0,
    "iron_mg": 0.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 320.0,
    "protein_g": 0.93,
    "salt_g": 0.1725,
    "sat_fat_g": 0.032,
    "sodium_mg": 69.0,
    "sugar_g": 4.74,
    "vitamin_a_ug": 835.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170393",
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
