/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-cooked-from-4-oz-raw",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-cooked-from-4-oz-raw",
      "kind": "unit",
      "label": "serving (cooked from 4 oz raw)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Ostrich, outside strip, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 120.0,
    "fat_g": 2.21,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.69,
    "magnesium_mg": 23.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 229.0,
    "potassium_mg": 333.0,
    "protein_g": 23.4,
    "salt_g": 0.175,
    "sat_fat_g": 0.771,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174485",
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
