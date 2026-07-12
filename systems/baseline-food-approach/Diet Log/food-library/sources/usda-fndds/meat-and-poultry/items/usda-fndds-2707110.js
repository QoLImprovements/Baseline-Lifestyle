/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meal-8-5-oz",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707110",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-meal-8-5-oz",
      "kind": "unit",
      "label": "1 meal (8.5 oz)"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken with rice and vegetable, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.0,
    "energy_kcal": 111.0,
    "fat_g": 3.03,
    "fibre_g": 0.8,
    "folate_ug": 27.0,
    "iron_mg": 0.58,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 189.0,
    "protein_g": 9.81,
    "salt_g": 1.025,
    "sat_fat_g": 0.607,
    "sodium_mg": 410.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707110",
  "state": "Frozen",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
