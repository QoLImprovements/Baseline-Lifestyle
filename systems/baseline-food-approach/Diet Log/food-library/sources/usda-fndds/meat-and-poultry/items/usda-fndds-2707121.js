/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-meal-11-oz",
      "kind": "unit",
      "label": "1 meal (11 oz)"
    }
  ],
  "name": "Meat loaf dinner, NFS, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 10.1,
    "energy_kcal": 134.0,
    "fat_g": 7.4,
    "fibre_g": 1.2,
    "folate_ug": 14.0,
    "iron_mg": 1.05,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 76.0,
    "potassium_mg": 221.0,
    "protein_g": 6.66,
    "salt_g": 0.98,
    "sat_fat_g": 2.2,
    "sodium_mg": 392.0,
    "sugar_g": 3.02,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707121",
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
