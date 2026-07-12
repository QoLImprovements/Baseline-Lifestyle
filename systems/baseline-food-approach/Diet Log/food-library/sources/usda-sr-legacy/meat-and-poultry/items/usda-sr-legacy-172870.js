/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "bird",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5717.0,
      "key": "bird",
      "kind": "unit",
      "label": "bird"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Turkey, whole, meat and skin, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.15,
    "energy_kcal": 664.0,
    "fat_g": 9.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.67,
    "magnesium_mg": 21.0,
    "omega3_g": 0.207,
    "phosphorus_mg": 195.0,
    "potassium_mg": 211.0,
    "protein_g": 19.0,
    "salt_g": 0.45,
    "sat_fat_g": 1.7,
    "sodium_mg": 180.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172870",
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
