/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171960",
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
      "gramsPerUnit": 198.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Fish, drum, freshwater, raw",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 0.0,
    "energy_kcal": 498.0,
    "fat_g": 4.93,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.661,
    "phosphorus_mg": 180.0,
    "potassium_mg": 275.0,
    "protein_g": 17.5,
    "salt_g": 0.1875,
    "sat_fat_g": 1.12,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171960",
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
