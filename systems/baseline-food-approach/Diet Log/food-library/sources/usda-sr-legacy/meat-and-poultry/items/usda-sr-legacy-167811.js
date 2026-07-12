/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Pork, fresh, backfat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 3400.0,
    "fat_g": 88.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.18,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 65.0,
    "protein_g": 2.92,
    "salt_g": 0.0275,
    "sat_fat_g": 32.2,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167811",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
