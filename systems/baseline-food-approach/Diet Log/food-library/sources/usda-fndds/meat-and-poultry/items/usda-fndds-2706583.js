/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-patty",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-large-patty",
      "kind": "unit",
      "label": "1 large patty"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "1-large-meatball",
      "kind": "unit",
      "label": "1 large meatball"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "1-small-patty",
      "kind": "unit",
      "label": "1 small patty"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-medium-meatball",
      "kind": "unit",
      "label": "1 medium meatball"
    }
  ],
  "name": "Meat loaf made with beef and pork, with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 6.75,
    "energy_kcal": 157.0,
    "fat_g": 8.18,
    "fibre_g": 0.7,
    "folate_ug": 17.0,
    "iron_mg": 1.66,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 275.0,
    "protein_g": 13.6,
    "salt_g": 1.065,
    "sat_fat_g": 3.02,
    "sodium_mg": 426.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706583",
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
