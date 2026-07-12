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
  "id": "usda-fndds-2708255",
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
      "gramsPerUnit": 40.0,
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
      "gramsPerUnit": 1.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 1.3,
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
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    }
  ],
  "name": "Pretzels, hard, flavored, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 77.7,
    "energy_kcal": 393.0,
    "fat_g": 7.58,
    "fibre_g": 3.3,
    "folate_ug": 2.0,
    "iron_mg": 0.46,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 68.0,
    "protein_g": 3.48,
    "salt_g": 4.05,
    "sat_fat_g": 3.4,
    "sodium_mg": 1620.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708255",
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
