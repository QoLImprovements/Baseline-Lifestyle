/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174493",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "patty-cooked-from-4-oz-raw",
      "kind": "unit",
      "label": "patty (cooked from 4 oz raw)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, ground, 85% lean, 15% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 180.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.32,
    "magnesium_mg": 19.0,
    "omega3_g": 0.197,
    "phosphorus_mg": 179.0,
    "potassium_mg": 202.0,
    "protein_g": 16.9,
    "salt_g": 0.135,
    "sat_fat_g": 3.41,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174493",
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
