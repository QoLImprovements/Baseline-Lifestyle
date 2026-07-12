/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chicken-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "chicken-bone-removed",
      "kind": "unit",
      "label": "chicken, bone removed"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, light meat, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 778.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.79,
    "magnesium_mg": 23.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 163.0,
    "potassium_mg": 204.0,
    "protein_g": 20.3,
    "salt_g": 0.1625,
    "sat_fat_g": 3.16,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171062",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
