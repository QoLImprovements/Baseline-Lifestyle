/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meal-11-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-meal-11-oz",
      "kind": "unit",
      "label": "1 meal (11 oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef dinner, NFS, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 10.9,
    "energy_kcal": 146.0,
    "fat_g": 8.4,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 0.84,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 72.0,
    "potassium_mg": 179.0,
    "protein_g": 6.82,
    "salt_g": 0.67,
    "sat_fat_g": 3.88,
    "sodium_mg": 268.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707096",
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
