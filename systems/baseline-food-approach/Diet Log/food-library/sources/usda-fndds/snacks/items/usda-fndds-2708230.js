/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-cup-popped",
  "description": "Popcorn",
  "id": "usda-fndds-2708230",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 35.0,
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
      "gramsPerUnit": 43.0,
      "key": "1-snack-mini-microwave-bag",
      "kind": "unit",
      "label": "1 snack/mini microwave bag"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-regular-microwave-bag",
      "kind": "unit",
      "label": "1 regular microwave bag"
    }
  ],
  "name": "Popcorn, microwave, kettle",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 58.0,
    "energy_kcal": 504.0,
    "fat_g": 27.5,
    "fibre_g": 10.5,
    "folate_ug": 22.0,
    "iron_mg": 2.31,
    "magnesium_mg": 104.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 238.0,
    "protein_g": 9.35,
    "salt_g": 1.5025,
    "sat_fat_g": 4.6,
    "sodium_mg": 601.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.12,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708230",
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
