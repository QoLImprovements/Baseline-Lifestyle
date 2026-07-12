/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708250",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-3-ring-thick-pretzel",
      "kind": "unit",
      "label": "1-3 ring thick pretzel"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-3-ring-thin-pretzel",
      "kind": "unit",
      "label": "1-3 ring thin pretzel"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-rod",
      "kind": "unit",
      "label": "1 rod"
    }
  ],
  "name": "Pretzels, hard, plain, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 79.8,
    "energy_kcal": 382.0,
    "fat_g": 3.22,
    "fibre_g": 3.1,
    "folate_ug": 171.0,
    "iron_mg": 4.45,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 184.0,
    "protein_g": 9.57,
    "salt_g": 1.7125,
    "sat_fat_g": 0.57,
    "sodium_mg": 685.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708250",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "pretzels-snack-mix",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
