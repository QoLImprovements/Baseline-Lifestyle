/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 519.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Soup, clam chowder, new england, reduced sodium, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.68,
    "energy_kcal": 293.0,
    "fat_g": 4.23,
    "fibre_g": 0.8,
    "folate_ug": 6.0,
    "iron_mg": 0.56,
    "magnesium_mg": 13.0,
    "omega3_g": 0.052,
    "phosphorus_mg": 31.0,
    "potassium_mg": 337.0,
    "protein_g": 2.33,
    "salt_g": 0.485,
    "sat_fat_g": 0.701,
    "sodium_mg": 194.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174063",
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
