/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-miniature-slider",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish sandwich, fried, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 25.7,
    "energy_kcal": 235.0,
    "fat_g": 8.15,
    "fibre_g": 0.9,
    "folate_ug": 55.0,
    "iron_mg": 1.89,
    "magnesium_mg": 24.0,
    "omega3_g": 0.081,
    "phosphorus_mg": 185.0,
    "potassium_mg": 229.0,
    "protein_g": 14.5,
    "salt_g": 1.155,
    "sat_fat_g": 2.43,
    "sodium_mg": 462.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707020",
  "state": "Fried",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "fried",
    "seafood-sandwiches"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
