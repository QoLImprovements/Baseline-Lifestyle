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
  "id": "usda-sr-legacy-171488",
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
  "name": "Turkey, dark meat, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.15,
    "energy_kcal": 166.0,
    "fat_g": 8.97,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.121,
    "phosphorus_mg": 166.0,
    "potassium_mg": 208.0,
    "protein_g": 19.8,
    "salt_g": 0.2825,
    "sat_fat_g": 2.41,
    "sodium_mg": 113.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171488",
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
