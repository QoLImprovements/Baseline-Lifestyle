/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 905.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    }
  ],
  "name": "Chicken, stewing, meat and skin, and giblets and neck, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.19,
    "energy_kcal": 1050.0,
    "fat_g": 19.5,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 1.51,
    "magnesium_mg": 20.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 173.0,
    "potassium_mg": 204.0,
    "protein_g": 17.5,
    "salt_g": 0.1775,
    "sat_fat_g": 5.48,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 331.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173640",
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
