/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-medium-single-serving-bag",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708265",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 3.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
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
      "gramsPerUnit": 96.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Pretzels, hard, cheese filled",
  "nutritionPerBasis": {
    "calcium_mg": 197.0,
    "carbs_g": 66.5,
    "energy_kcal": 463.0,
    "fat_g": 16.9,
    "fibre_g": 3.6,
    "folate_ug": 8.0,
    "iron_mg": 0.92,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 130.0,
    "protein_g": 9.85,
    "salt_g": 2.8,
    "sat_fat_g": 9.66,
    "sodium_mg": 1120.0,
    "sugar_g": 17.6,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708265",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "milk-dairy-and-eggs",
    "pretzels-snack-mix",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
