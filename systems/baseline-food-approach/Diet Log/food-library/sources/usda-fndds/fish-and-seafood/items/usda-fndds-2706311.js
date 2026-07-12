/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fish",
  "id": "usda-fndds-2706311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-large-can",
      "kind": "unit",
      "label": "1 large can"
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
      "gramsPerUnit": 75.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    }
  ],
  "name": "Fish, tuna, canned",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.08,
    "energy_kcal": 85.0,
    "fat_g": 0.94,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.67,
    "magnesium_mg": 23.0,
    "omega3_g": 0.226,
    "phosphorus_mg": 137.0,
    "potassium_mg": 176.0,
    "protein_g": 19.0,
    "salt_g": 0.5475,
    "sat_fat_g": 0.224,
    "sodium_mg": 219.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706311",
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
