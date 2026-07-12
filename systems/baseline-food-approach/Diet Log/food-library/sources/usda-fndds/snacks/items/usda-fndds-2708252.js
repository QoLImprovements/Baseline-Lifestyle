/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-miniature-bite-size",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
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
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-rod",
      "kind": "unit",
      "label": "1 rod"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-3-ring-thick-pretzel",
      "kind": "unit",
      "label": "1-3 ring thick pretzel"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-3-ring-thin-pretzel",
      "kind": "unit",
      "label": "1-3 ring thin pretzel"
    }
  ],
  "name": "Pretzels, hard, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 79.4,
    "energy_kcal": 388.0,
    "fat_g": 3.88,
    "fibre_g": 3.4,
    "folate_ug": 169.0,
    "iron_mg": 4.53,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 220.0,
    "protein_g": 9.92,
    "salt_g": 2.95,
    "sat_fat_g": 0.518,
    "sodium_mg": 1180.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708252",
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
