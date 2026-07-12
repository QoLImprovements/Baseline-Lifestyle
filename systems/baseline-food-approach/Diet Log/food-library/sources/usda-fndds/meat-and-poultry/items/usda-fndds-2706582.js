/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-patty",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "1-small-patty",
      "kind": "unit",
      "label": "1 small patty"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "1-medium-patty",
      "kind": "unit",
      "label": "1 medium patty"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium-meatball",
      "kind": "unit",
      "label": "1 medium meatball"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-large-meatball",
      "kind": "unit",
      "label": "1 large meatball"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-small-meatball",
      "kind": "unit",
      "label": "1 small meatball"
    }
  ],
  "name": "Meat loaf made with beef, veal and pork",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 7.18,
    "energy_kcal": 196.0,
    "fat_g": 10.5,
    "fibre_g": 0.4,
    "folate_ug": 21.0,
    "iron_mg": 1.86,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 269.0,
    "protein_g": 17.3,
    "salt_g": 1.03,
    "sat_fat_g": 3.89,
    "sodium_mg": 412.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706582",
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
