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
  "id": "usda-sr-legacy-168282",
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
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pork, cured, ham, center slice, country-style, separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.3,
    "energy_kcal": 816.0,
    "fat_g": 8.32,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.11,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 510.0,
    "protein_g": 27.8,
    "salt_g": 6.75,
    "sat_fat_g": 2.78,
    "sodium_mg": 2700.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168282",
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
