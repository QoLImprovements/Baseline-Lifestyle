/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-kernel",
  "description": "Popcorn",
  "id": "usda-fndds-2708228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Popcorn, microwave, flavored, light",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 71.2,
    "energy_kcal": 406.0,
    "fat_g": 10.0,
    "fibre_g": 13.3,
    "folate_ug": 28.0,
    "iron_mg": 2.92,
    "magnesium_mg": 132.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 328.0,
    "potassium_mg": 301.0,
    "protein_g": 11.8,
    "salt_g": 2.575,
    "sat_fat_g": 2.49,
    "sodium_mg": 1030.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708228",
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
