/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large-sandwich",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood salad sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 17.2,
    "energy_kcal": 216.0,
    "fat_g": 11.8,
    "fibre_g": 1.0,
    "folate_ug": 52.0,
    "iron_mg": 1.48,
    "magnesium_mg": 24.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 114.0,
    "potassium_mg": 150.0,
    "protein_g": 9.89,
    "salt_g": 1.35,
    "sat_fat_g": 1.94,
    "sodium_mg": 540.0,
    "sugar_g": 2.15,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 26.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707039",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
