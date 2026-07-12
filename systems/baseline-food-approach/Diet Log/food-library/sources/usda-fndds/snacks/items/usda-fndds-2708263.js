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
  "id": "usda-fndds-2708263",
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
      "gramsPerUnit": 25.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-3-ring-thin-pretzel",
      "kind": "unit",
      "label": "1-3 ring thin pretzel"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-3-ring-thick-pretzel",
      "kind": "unit",
      "label": "1-3 ring thick pretzel"
    }
  ],
  "name": "Pretzels, hard, coated, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 75.1,
    "energy_kcal": 451.0,
    "fat_g": 15.6,
    "fibre_g": 1.4,
    "folate_ug": 4.0,
    "iron_mg": 0.29,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 142.0,
    "protein_g": 3.76,
    "salt_g": 1.6575,
    "sat_fat_g": 9.09,
    "sodium_mg": 663.0,
    "sugar_g": 45.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708263",
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
