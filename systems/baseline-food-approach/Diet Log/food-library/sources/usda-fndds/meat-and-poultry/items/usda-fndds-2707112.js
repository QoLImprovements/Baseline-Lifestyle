/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707112",
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
  "name": "Chicken and vegetable entree with rice, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 19.6,
    "energy_kcal": 171.0,
    "fat_g": 5.57,
    "fibre_g": 0.7,
    "folate_ug": 27.0,
    "iron_mg": 0.95,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 178.0,
    "protein_g": 10.4,
    "salt_g": 0.8975,
    "sat_fat_g": 1.01,
    "sodium_mg": 359.0,
    "sugar_g": 6.42,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707112",
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
