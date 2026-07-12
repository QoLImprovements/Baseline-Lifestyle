/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "bunch",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "bunch",
      "kind": "unit",
      "label": "bunch"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Spinach, raw",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 3.63,
    "energy_kcal": 23.0,
    "fat_g": 0.39,
    "fibre_g": 2.2,
    "folate_ug": 194.0,
    "iron_mg": 2.71,
    "magnesium_mg": 79.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 558.0,
    "protein_g": 2.86,
    "salt_g": 0.1975,
    "sat_fat_g": 0.063,
    "sodium_mg": 79.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 469.0,
    "vitamin_c_mg": 28.1,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 483.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168462",
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
