/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-cooked-from-4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-cooked-from-4-oz",
      "kind": "unit",
      "label": "serving (cooked from 4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Turkey, ground, 93% lean, 7% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 628.0,
    "fat_g": 8.34,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.17,
    "magnesium_mg": 21.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 193.0,
    "potassium_mg": 213.0,
    "protein_g": 18.7,
    "salt_g": 0.1725,
    "sat_fat_g": 2.17,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172850",
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
