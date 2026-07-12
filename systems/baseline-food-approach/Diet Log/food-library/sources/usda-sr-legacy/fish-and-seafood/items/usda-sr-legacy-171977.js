/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Mollusks, clam, mixed species, canned, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.1,
    "energy_kcal": 8.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 114.0,
    "potassium_mg": 149.0,
    "protein_g": 0.4,
    "salt_g": 0.5375,
    "sat_fat_g": 0.002,
    "sodium_mg": 215.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171977",
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
