/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708266",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    }
  ],
  "name": "Pretzels, hard, peanut butter filled",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 60.8,
    "energy_kcal": 454.0,
    "fat_g": 19.0,
    "fibre_g": 3.9,
    "folate_ug": 142.0,
    "iron_mg": 3.62,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 333.0,
    "protein_g": 14.0,
    "salt_g": 2.6,
    "sat_fat_g": 3.69,
    "sodium_mg": 1040.0,
    "sugar_g": 4.95,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 3.33,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708266",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "nuts-and-seeds",
    "pretzels-snack-mix",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
