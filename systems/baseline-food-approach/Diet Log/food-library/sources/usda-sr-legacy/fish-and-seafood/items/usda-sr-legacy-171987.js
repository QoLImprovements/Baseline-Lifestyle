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
  "id": "usda-sr-legacy-171987",
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
      "gramsPerUnit": 178.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Fish, tuna, white, canned in oil, without salt, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 778.0,
    "fat_g": 8.08,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.65,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 267.0,
    "potassium_mg": 333.0,
    "protein_g": 26.5,
    "salt_g": 0.125,
    "sat_fat_g": 1.65,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171987",
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
