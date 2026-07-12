/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "raw-liver",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "raw-liver",
      "kind": "unit",
      "label": "raw liver"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, all classes, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 534.0,
    "fat_g": 5.5,
    "fibre_g": 0.0,
    "folate_ug": 677.0,
    "iron_mg": 8.94,
    "magnesium_mg": 24.0,
    "omega3_g": 0.113,
    "phosphorus_mg": 279.0,
    "potassium_mg": 214.0,
    "protein_g": 18.3,
    "salt_g": 0.3275,
    "sat_fat_g": 1.66,
    "sodium_mg": 131.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8060.0,
    "vitamin_c_mg": 24.5,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171486",
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
