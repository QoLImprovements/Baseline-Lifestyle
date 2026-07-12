/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-lean-cuisine-meal-11-oz",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-lean-cuisine-meal-11-oz",
      "kind": "unit",
      "label": "1 Lean Cuisine meal (11 oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "1-uncle-ben-s-rice-bowl-12-oz",
      "kind": "unit",
      "label": "1 Uncle Ben's Rice Bowl (12 oz)"
    },
    {
      "gramsPerUnit": 297.0,
      "key": "1-weight-watchers-meal-10-5-oz",
      "kind": "unit",
      "label": "1 Weight Watchers meal (10.5 oz)"
    }
  ],
  "name": "Teriyaki chicken with rice and vegetable, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 22.5,
    "energy_kcal": 126.0,
    "fat_g": 1.56,
    "fibre_g": 0.7,
    "folate_ug": 18.0,
    "iron_mg": 0.35,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 123.0,
    "protein_g": 5.65,
    "salt_g": 0.8325,
    "sat_fat_g": 0.327,
    "sodium_mg": 333.0,
    "sugar_g": 4.07,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707109",
  "state": "Frozen",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
