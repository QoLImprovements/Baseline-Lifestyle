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
  "id": "usda-sr-legacy-171976",
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
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mollusks, clam, mixed species, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 5.9,
    "energy_kcal": 595.0,
    "fat_g": 1.59,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.68,
    "magnesium_mg": 32.0,
    "omega3_g": 0.188,
    "phosphorus_mg": 327.0,
    "potassium_mg": 628.0,
    "protein_g": 24.2,
    "salt_g": 0.28,
    "sat_fat_g": 0.309,
    "sodium_mg": 112.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171976",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
