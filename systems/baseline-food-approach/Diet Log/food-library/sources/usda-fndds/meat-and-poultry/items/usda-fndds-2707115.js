/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-meal-9-oz",
      "kind": "unit",
      "label": "1 meal (9 oz)"
    }
  ],
  "name": "Chicken in soy-based sauce, rice and vegetables, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.1,
    "energy_kcal": 109.0,
    "fat_g": 0.91,
    "fibre_g": 1.0,
    "folate_ug": 22.0,
    "iron_mg": 0.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 175.0,
    "protein_g": 6.56,
    "salt_g": 0.8325,
    "sat_fat_g": 0.239,
    "sodium_mg": 333.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707115",
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
