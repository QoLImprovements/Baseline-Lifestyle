/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 337.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, salmon, sockeye, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 232.0,
    "carbs_g": 0.0,
    "energy_kcal": 167.0,
    "fat_g": 7.39,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.65,
    "magnesium_mg": 31.0,
    "omega3_g": 1.46,
    "phosphorus_mg": 338.0,
    "potassium_mg": 314.0,
    "protein_g": 23.6,
    "salt_g": 1.02,
    "sat_fat_g": 1.44,
    "sodium_mg": 408.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173693",
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
