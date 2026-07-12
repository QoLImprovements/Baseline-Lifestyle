/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Popcorn",
  "id": "usda-fndds-2708225",
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
      "gramsPerUnit": 85.0,
      "key": "1-regular-microwave-bag",
      "kind": "unit",
      "label": "1 regular microwave bag"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-snack-mini-microwave-bag",
      "kind": "unit",
      "label": "1 snack/mini microwave bag"
    }
  ],
  "name": "Popcorn, microwave, plain, light",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 71.7,
    "energy_kcal": 409.0,
    "fat_g": 10.1,
    "fibre_g": 13.4,
    "folate_ug": 29.0,
    "iron_mg": 2.94,
    "magnesium_mg": 133.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 303.0,
    "protein_g": 11.9,
    "salt_g": 1.915,
    "sat_fat_g": 2.51,
    "sodium_mg": 766.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708225",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "popcorn",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
