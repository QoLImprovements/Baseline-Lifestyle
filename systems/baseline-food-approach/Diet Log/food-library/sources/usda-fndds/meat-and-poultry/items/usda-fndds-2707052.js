/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2707052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Italian sandwich or sub, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 205.0,
    "carbs_g": 16.4,
    "energy_kcal": 313.0,
    "fat_g": 20.0,
    "fibre_g": 0.7,
    "folate_ug": 38.0,
    "iron_mg": 1.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 230.0,
    "potassium_mg": 251.0,
    "protein_g": 16.2,
    "salt_g": 2.625,
    "sat_fat_g": 8.11,
    "sodium_mg": 1050.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707052",
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
