/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "unit-2-large-or-5-small",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "unit-2-large-or-5-small",
      "kind": "unit",
      "label": "unit 2 large or 5 small"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, scallop, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 3.18,
    "energy_kcal": 289.0,
    "fat_g": 0.49,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.38,
    "magnesium_mg": 22.0,
    "omega3_g": 0.109,
    "phosphorus_mg": 334.0,
    "potassium_mg": 205.0,
    "protein_g": 12.1,
    "salt_g": 0.98,
    "sat_fat_g": 0.128,
    "sodium_mg": 392.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174220",
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
