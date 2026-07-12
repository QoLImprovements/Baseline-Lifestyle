/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 332.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood garden salad with seafood, lettuce, eggs, vegetables excluding tomato and carrots, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 2.39,
    "energy_kcal": 64.0,
    "fat_g": 2.05,
    "fibre_g": 0.7,
    "folate_ug": 38.0,
    "iron_mg": 0.75,
    "magnesium_mg": 23.0,
    "omega3_g": 0.124,
    "phosphorus_mg": 107.0,
    "potassium_mg": 219.0,
    "protein_g": 8.41,
    "salt_g": 0.64,
    "sat_fat_g": 0.581,
    "sodium_mg": 256.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 52.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706847",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
