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
  "id": "usda-sr-legacy-171480",
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
      "gramsPerUnit": 5002.0,
      "key": "bird",
      "kind": "unit",
      "label": "bird"
    }
  ],
  "name": "Turkey, whole, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.14,
    "energy_kcal": 479.0,
    "fat_g": 1.93,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.86,
    "magnesium_mg": 27.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 190.0,
    "potassium_mg": 235.0,
    "protein_g": 22.6,
    "salt_g": 0.295,
    "sat_fat_g": 0.459,
    "sodium_mg": 118.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171480",
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
