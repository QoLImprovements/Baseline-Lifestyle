/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-submarine",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish sandwich, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 21.2,
    "energy_kcal": 180.0,
    "fat_g": 3.29,
    "fibre_g": 0.8,
    "folate_ug": 48.0,
    "iron_mg": 1.58,
    "magnesium_mg": 25.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 209.0,
    "potassium_mg": 261.0,
    "protein_g": 16.1,
    "salt_g": 0.9475,
    "sat_fat_g": 0.766,
    "sodium_mg": 379.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707031",
  "state": "Grilled",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "seafood-sandwiches"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
