/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-small-single-serving-bag",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Snack mix, plain (Chex Mix)",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 72.2,
    "energy_kcal": 417.0,
    "fat_g": 10.3,
    "fibre_g": 4.6,
    "folate_ug": 118.0,
    "iron_mg": 4.88,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 141.0,
    "protein_g": 8.74,
    "salt_g": 1.7675,
    "sat_fat_g": 1.91,
    "sodium_mg": 707.0,
    "sugar_g": 7.98,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 6.1,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708291",
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
