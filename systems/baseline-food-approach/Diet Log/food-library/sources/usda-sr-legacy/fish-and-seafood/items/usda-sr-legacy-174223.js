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
  "id": "usda-sr-legacy-174223",
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
    }
  ],
  "name": "Mollusks, squid, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 3.08,
    "energy_kcal": 385.0,
    "fat_g": 1.38,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.68,
    "magnesium_mg": 33.0,
    "omega3_g": 0.492,
    "phosphorus_mg": 221.0,
    "potassium_mg": 246.0,
    "protein_g": 15.6,
    "salt_g": 0.11,
    "sat_fat_g": 0.358,
    "sodium_mg": 44.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174223",
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
