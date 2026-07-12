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
  "id": "usda-fndds-2708220",
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
      "gramsPerUnit": 11.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-oz-unpopped-yields",
      "kind": "unit",
      "label": "1 oz, unpopped, yields"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 211.0,
      "key": "1-cup-unpopped-yields",
      "kind": "unit",
      "label": "1 cup, unpopped, yields"
    }
  ],
  "name": "Popcorn, air-popped, with added butter",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 65.8,
    "energy_kcal": 430.0,
    "fat_g": 15.3,
    "fibre_g": 12.2,
    "folate_ug": 27.0,
    "iron_mg": 2.7,
    "magnesium_mg": 122.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 305.0,
    "potassium_mg": 282.0,
    "protein_g": 11.0,
    "salt_g": 0.5675,
    "sat_fat_g": 5.48,
    "sodium_mg": 227.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708220",
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
