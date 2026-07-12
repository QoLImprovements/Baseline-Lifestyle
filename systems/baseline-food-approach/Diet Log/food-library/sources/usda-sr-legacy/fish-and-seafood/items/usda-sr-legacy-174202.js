/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "leg",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174202",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "leg",
      "kind": "unit",
      "label": "leg"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, crab, alaska king, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 0.0,
    "energy_kcal": 406.0,
    "fat_g": 1.54,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 0.76,
    "magnesium_mg": 63.0,
    "omega3_g": 0.444,
    "phosphorus_mg": 280.0,
    "potassium_mg": 262.0,
    "protein_g": 19.4,
    "salt_g": 2.675,
    "sat_fat_g": 0.133,
    "sodium_mg": 1070.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 7.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174202",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
