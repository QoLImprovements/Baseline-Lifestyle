/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-meatball",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706548",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-medium-meatball",
      "kind": "unit",
      "label": "1 medium meatball"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "1-large-meatball",
      "kind": "unit",
      "label": "1 large meatball"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-small-meatball",
      "kind": "unit",
      "label": "1 small meatball"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Meat loaf made with chicken or turkey, with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 7.29,
    "energy_kcal": 145.0,
    "fat_g": 6.2,
    "fibre_g": 0.8,
    "folate_ug": 20.0,
    "iron_mg": 1.42,
    "magnesium_mg": 24.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 164.0,
    "potassium_mg": 267.0,
    "protein_g": 15.5,
    "salt_g": 1.1225,
    "sat_fat_g": 1.7,
    "sodium_mg": 449.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706548",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
