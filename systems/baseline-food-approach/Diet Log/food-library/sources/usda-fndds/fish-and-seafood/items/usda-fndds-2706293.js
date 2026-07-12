/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-standard-can",
  "description": "Fish",
  "id": "usda-fndds-2706293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-sardine",
      "kind": "unit",
      "label": "1 sardine"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish, sardines, canned",
  "nutritionPerBasis": {
    "calcium_mg": 382.0,
    "carbs_g": 0.0,
    "energy_kcal": 208.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.92,
    "magnesium_mg": 39.0,
    "omega3_g": 0.982,
    "phosphorus_mg": 490.0,
    "potassium_mg": 397.0,
    "protein_g": 24.6,
    "salt_g": 0.7675,
    "sat_fat_g": 1.53,
    "sodium_mg": 307.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.04,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706293",
  "state": "Canned",
  "subcategory": "Fish",
  "tags": [
    "canned",
    "fish",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
