/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-rod",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-rod",
      "kind": "unit",
      "label": "1 rod"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
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
      "gramsPerUnit": 31.0,
      "key": "1-3-ring-thick-pretzel",
      "kind": "unit",
      "label": "1-3 ring thick pretzel"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 86.0,
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
    }
  ],
  "name": "Pretzels, hard, white chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 74.7,
    "energy_kcal": 445.0,
    "fat_g": 14.2,
    "fibre_g": 1.2,
    "folate_ug": 71.0,
    "iron_mg": 1.82,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 172.0,
    "protein_g": 5.94,
    "salt_g": 1.105,
    "sat_fat_g": 8.0,
    "sodium_mg": 442.0,
    "sugar_g": 44.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708261",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "pretzels-snack-mix",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
