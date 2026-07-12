/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-piece-large-pizza",
  "description": "Pizza",
  "id": "usda-fndds-2708641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "1-piece-large-pizza",
      "kind": "unit",
      "label": "1 piece, large pizza"
    },
    {
      "gramsPerUnit": 573.0,
      "key": "1-small-pizza-8-10-diameter",
      "kind": "unit",
      "label": "1 small pizza (8-10\" diameter)"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-piece-small-pizza",
      "kind": "unit",
      "label": "1 piece, small pizza"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "1-french-bread",
      "kind": "unit",
      "label": "1 French bread"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-piece-extra-large-pizza",
      "kind": "unit",
      "label": "1 piece, extra-large pizza"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-2-english-muffin",
      "kind": "unit",
      "label": "1/2 English muffin"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "1-2-bagel",
      "kind": "unit",
      "label": "1/2 bagel"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-piece-medium-pizza",
      "kind": "unit",
      "label": "1 piece, medium pizza"
    },
    {
      "gramsPerUnit": 893.0,
      "key": "1-medium-pizza-11-12-diameter",
      "kind": "unit",
      "label": "1 medium pizza (11-12\" diameter)"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-personal-size-pizza-5-7-diameter",
      "kind": "unit",
      "label": "1 personal size pizza (5-7\" diameter)"
    },
    {
      "gramsPerUnit": 1117.0,
      "key": "1-large-pizza-13-15-diameter",
      "kind": "unit",
      "label": "1 large pizza (13-15\" diameter)"
    }
  ],
  "name": "Pizza with pepperoni, from restaurant or fast food, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 31.8,
    "energy_kcal": 287.0,
    "fat_g": 12.6,
    "fibre_g": 2.2,
    "folate_ug": 103.0,
    "iron_mg": 2.55,
    "magnesium_mg": 23.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 195.0,
    "potassium_mg": 189.0,
    "protein_g": 11.5,
    "salt_g": 1.55,
    "sat_fat_g": 4.84,
    "sodium_mg": 620.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708641",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "pizza",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
