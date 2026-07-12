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
  "id": "usda-fndds-2707103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "1-meal-9-1-oz",
      "kind": "unit",
      "label": "1 meal (9.1 oz)"
    }
  ],
  "name": "Meatballs, Swedish, in gravy, with noodles, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.3,
    "energy_kcal": 112.0,
    "fat_g": 3.35,
    "fibre_g": 0.8,
    "folate_ug": 30.0,
    "iron_mg": 1.13,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 157.0,
    "protein_g": 9.88,
    "salt_g": 0.6375,
    "sat_fat_g": 1.18,
    "sodium_mg": 255.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707103",
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
