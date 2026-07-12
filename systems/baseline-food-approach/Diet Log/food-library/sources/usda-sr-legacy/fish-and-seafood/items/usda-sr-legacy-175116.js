/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz-boneless",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, herring, Atlantic, raw",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 0.0,
    "energy_kcal": 661.0,
    "fat_g": 9.04,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.1,
    "magnesium_mg": 32.0,
    "omega3_g": 1.626,
    "phosphorus_mg": 236.0,
    "potassium_mg": 327.0,
    "protein_g": 18.0,
    "salt_g": 0.225,
    "sat_fat_g": 2.04,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175116",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
