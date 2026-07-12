/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "liver",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "liver",
      "kind": "unit",
      "label": "liver"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, liver, all classes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.73,
    "energy_kcal": 496.0,
    "fat_g": 4.83,
    "fibre_g": 0.0,
    "folate_ug": 588.0,
    "iron_mg": 8.99,
    "magnesium_mg": 19.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 297.0,
    "potassium_mg": 230.0,
    "protein_g": 16.9,
    "salt_g": 0.1775,
    "sat_fat_g": 1.56,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3300.0,
    "vitamin_c_mg": 17.9,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171060",
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
