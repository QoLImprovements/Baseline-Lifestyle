/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like spread, SMART BALANCE Omega Plus Spread (with plant sterols & fish oil)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.16,
    "energy_kcal": 605.0,
    "fat_g": 71.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 3.085,
    "phosphorus_mg": 23.0,
    "potassium_mg": 71.0,
    "protein_g": 0.13,
    "salt_g": 1.8225,
    "sat_fat_g": 19.8,
    "sodium_mg": 729.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5410.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 11.8,
    "vitamin_k_ug": 52.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173610",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
