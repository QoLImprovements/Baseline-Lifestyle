/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large-can",
  "description": "Shellfish",
  "id": "usda-fndds-2706355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-large-can",
      "kind": "unit",
      "label": "1 large can"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
    }
  ],
  "name": "Oysters, canned",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.25,
    "energy_kcal": 74.0,
    "fat_g": 2.68,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 7.28,
    "magnesium_mg": 59.0,
    "omega3_g": 0.531,
    "phosphorus_mg": 151.0,
    "potassium_mg": 249.0,
    "protein_g": 7.67,
    "salt_g": 0.305,
    "sat_fat_g": 0.686,
    "sodium_mg": 122.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706355",
  "state": "Canned",
  "subcategory": "Shellfish",
  "tags": [
    "canned",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
