/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-3-ring-thin-pretzel",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-3-ring-thin-pretzel",
      "kind": "unit",
      "label": "1-3 ring thin pretzel"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-rod",
      "kind": "unit",
      "label": "1 rod"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-3-ring-thick-pretzel",
      "kind": "unit",
      "label": "1-3 ring thick pretzel"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pretzels, hard, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 70.1,
    "energy_kcal": 467.0,
    "fat_g": 17.6,
    "fibre_g": 3.5,
    "folate_ug": 74.0,
    "iron_mg": 2.54,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 199.0,
    "protein_g": 7.05,
    "salt_g": 1.235,
    "sat_fat_g": 8.61,
    "sodium_mg": 494.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708260",
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
