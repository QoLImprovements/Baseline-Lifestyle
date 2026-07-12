/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meal-10-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-meal-10-oz",
      "kind": "unit",
      "label": "1 meal (10 oz)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef with vegetable, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 4.69,
    "energy_kcal": 125.0,
    "fat_g": 6.95,
    "fibre_g": 0.8,
    "folate_ug": 9.0,
    "iron_mg": 1.32,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 281.0,
    "protein_g": 10.6,
    "salt_g": 0.73,
    "sat_fat_g": 2.63,
    "sodium_mg": 292.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707097",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
