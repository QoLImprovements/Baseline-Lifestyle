/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-cooked",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-medium-patty",
      "kind": "unit",
      "label": "1 medium patty"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-large-patty",
      "kind": "unit",
      "label": "1 large patty"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "1-small-patty",
      "kind": "unit",
      "label": "1 small patty"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    }
  ],
  "name": "Meat loaf made with beef, with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 6.77,
    "energy_kcal": 159.0,
    "fat_g": 8.35,
    "fibre_g": 0.7,
    "folate_ug": 18.0,
    "iron_mg": 1.8,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 279.0,
    "protein_g": 13.8,
    "salt_g": 1.0725,
    "sat_fat_g": 3.07,
    "sodium_mg": 429.0,
    "sugar_g": 2.23,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706500",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
