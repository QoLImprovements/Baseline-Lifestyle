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
  "id": "usda-fndds-2708224",
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
      "gramsPerUnit": 43.0,
      "key": "1-snack-mini-microwave-bag",
      "kind": "unit",
      "label": "1 snack/mini microwave bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-regular-microwave-bag",
      "kind": "unit",
      "label": "1 regular microwave bag"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    }
  ],
  "name": "Popcorn, microwave, plain",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 55.0,
    "energy_kcal": 518.0,
    "fat_g": 30.6,
    "fibre_g": 10.2,
    "folate_ug": 22.0,
    "iron_mg": 2.26,
    "magnesium_mg": 102.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 232.0,
    "protein_g": 9.13,
    "salt_g": 1.91,
    "sat_fat_g": 14.3,
    "sodium_mg": 764.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 28.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708224",
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
