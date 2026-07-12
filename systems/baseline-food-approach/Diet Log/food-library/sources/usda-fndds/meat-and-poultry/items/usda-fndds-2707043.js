/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2707043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Bologna sandwich on wheat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 260.0,
    "carbs_g": 23.2,
    "energy_kcal": 285.0,
    "fat_g": 15.8,
    "fibre_g": 2.4,
    "folate_ug": 37.0,
    "iron_mg": 1.96,
    "magnesium_mg": 35.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 248.0,
    "potassium_mg": 237.0,
    "protein_g": 12.3,
    "salt_g": 1.9925,
    "sat_fat_g": 5.84,
    "sodium_mg": 797.0,
    "sugar_g": 3.51,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707043",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
