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
  "id": "usda-sr-legacy-174189",
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
      "gramsPerUnit": 312.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Fish, cod, Atlantic, canned, solids and liquid",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 439.0,
    "fat_g": 0.86,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.49,
    "magnesium_mg": 41.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 260.0,
    "potassium_mg": 528.0,
    "protein_g": 22.8,
    "salt_g": 0.545,
    "sat_fat_g": 0.167,
    "sodium_mg": 218.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174189",
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
