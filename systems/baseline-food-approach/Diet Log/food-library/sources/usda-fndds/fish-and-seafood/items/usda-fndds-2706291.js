/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-small-can",
  "description": "Fish",
  "id": "usda-fndds-2706291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 420.0,
      "key": "1-tall-can",
      "kind": "unit",
      "label": "1 tall can"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Fish, salmon, canned",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 0.0,
    "energy_kcal": 136.0,
    "fat_g": 4.21,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 1.029,
    "phosphorus_mg": 253.0,
    "potassium_mg": 326.0,
    "protein_g": 24.6,
    "salt_g": 0.945,
    "sat_fat_g": 0.749,
    "sodium_mg": 378.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706291",
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
