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
  "id": "usda-fndds-2707024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 180.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    }
  ],
  "name": "Fried seafood sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 24.7,
    "energy_kcal": 234.0,
    "fat_g": 9.82,
    "fibre_g": 1.1,
    "folate_ug": 60.0,
    "iron_mg": 1.82,
    "magnesium_mg": 23.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 177.0,
    "potassium_mg": 113.0,
    "protein_g": 11.3,
    "salt_g": 1.0975,
    "sat_fat_g": 1.51,
    "sodium_mg": 439.0,
    "sugar_g": 1.91,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.24,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707024",
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
