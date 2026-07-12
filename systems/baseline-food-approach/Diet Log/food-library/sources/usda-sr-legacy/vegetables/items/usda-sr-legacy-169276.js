/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium-3-4-to-1-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "medium-3-4-to-1-dia",
      "kind": "unit",
      "label": "medium (3/4\" to 1\" dia)"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "large-1-to-1-1-4-dia",
      "kind": "unit",
      "label": "large (1\" to 1-1/4\" dia)"
    }
  ],
  "name": "Radishes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 3.4,
    "energy_kcal": 16.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 25.0,
    "iron_mg": 0.34,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 233.0,
    "protein_g": 0.68,
    "salt_g": 0.0975,
    "sat_fat_g": 0.032,
    "sodium_mg": 39.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169276",
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
