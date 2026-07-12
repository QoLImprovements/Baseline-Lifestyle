/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171482",
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
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Turkey, whole, skin (light and dark), raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.16,
    "energy_kcal": 1700.0,
    "fat_g": 38.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.85,
    "magnesium_mg": 11.0,
    "omega3_g": 0.65,
    "phosphorus_mg": 120.0,
    "potassium_mg": 124.0,
    "protein_g": 13.0,
    "salt_g": 0.155,
    "sat_fat_g": 10.4,
    "sodium_mg": 62.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171482",
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
