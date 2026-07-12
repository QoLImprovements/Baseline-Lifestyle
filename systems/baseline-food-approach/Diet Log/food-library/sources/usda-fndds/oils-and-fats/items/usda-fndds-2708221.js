/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup-popped",
  "description": "Popcorn",
  "id": "usda-fndds-2708221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "1-cup-unpopped-yields",
      "kind": "unit",
      "label": "1 cup, unpopped, yields"
    }
  ],
  "name": "Popcorn, popped in oil, no butter added",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 57.9,
    "energy_kcal": 498.0,
    "fat_g": 28.0,
    "fibre_g": 10.0,
    "folate_ug": 17.0,
    "iron_mg": 2.77,
    "magnesium_mg": 108.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 249.0,
    "potassium_mg": 224.0,
    "protein_g": 8.96,
    "salt_g": 0.3925,
    "sat_fat_g": 5.03,
    "sodium_mg": 157.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.42,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708221",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "oils-and-fats",
    "popcorn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
