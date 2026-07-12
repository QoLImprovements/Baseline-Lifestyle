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
  "id": "usda-sr-legacy-174203",
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
    }
  ],
  "name": "Crustaceans, crab, alaska king, imitation, made from surimi",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 15.0,
    "energy_kcal": 95.0,
    "fat_g": 0.46,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.39,
    "magnesium_mg": 43.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 282.0,
    "potassium_mg": 90.0,
    "protein_g": 7.62,
    "salt_g": 1.3225,
    "sat_fat_g": 0.216,
    "sodium_mg": 529.0,
    "sugar_g": 6.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174203",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
