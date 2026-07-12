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
  "id": "usda-fndds-2708219",
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
      "gramsPerUnit": 8.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-unpopped-yields",
      "kind": "unit",
      "label": "1 cup, unpopped, yields"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-oz-unpopped-yields",
      "kind": "unit",
      "label": "1 oz, unpopped, yields"
    }
  ],
  "name": "Popcorn, air-popped, no butter added",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 77.5,
    "energy_kcal": 385.0,
    "fat_g": 4.52,
    "fibre_g": 14.4,
    "folate_ug": 31.0,
    "iron_mg": 3.18,
    "magnesium_mg": 143.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 328.0,
    "protein_g": 12.9,
    "salt_g": 0.405,
    "sat_fat_g": 0.634,
    "sodium_mg": 162.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708219",
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
