/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    }
  ],
  "name": "Fish sandwich, fried, on wheat bun, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 193.0,
    "carbs_g": 21.2,
    "energy_kcal": 247.0,
    "fat_g": 11.0,
    "fibre_g": 2.1,
    "folate_ug": 42.0,
    "iron_mg": 1.59,
    "magnesium_mg": 37.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 263.0,
    "potassium_mg": 243.0,
    "protein_g": 15.9,
    "salt_g": 1.17,
    "sat_fat_g": 4.31,
    "sodium_mg": 468.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707030",
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
