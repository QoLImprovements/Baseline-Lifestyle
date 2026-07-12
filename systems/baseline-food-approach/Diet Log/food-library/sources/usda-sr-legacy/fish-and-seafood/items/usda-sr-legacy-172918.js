/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can-10-75-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 593.0,
      "key": "can-10-75-oz-prepared",
      "kind": "unit",
      "label": "can (10.75 oz), prepared"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, cream of shrimp, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.27,
    "energy_kcal": 150.0,
    "fat_g": 2.07,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.21,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 24.0,
    "protein_g": 1.11,
    "salt_g": 0.9775,
    "sat_fat_g": 1.29,
    "sodium_mg": 391.0,
    "sugar_g": 0.24,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172918",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fish-and-seafood",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
