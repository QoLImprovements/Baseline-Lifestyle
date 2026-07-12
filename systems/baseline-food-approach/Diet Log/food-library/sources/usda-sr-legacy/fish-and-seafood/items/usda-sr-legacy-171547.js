/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 303.0,
      "key": "can-10-7-oz",
      "kind": "unit",
      "label": "can (10.7 oz)"
    }
  ],
  "name": "Soup, clam chowder, new england, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 10.3,
    "energy_kcal": 303.0,
    "fat_g": 2.06,
    "fibre_g": 0.7,
    "folate_ug": 14.0,
    "iron_mg": 2.48,
    "magnesium_mg": 13.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 260.0,
    "potassium_mg": 221.0,
    "protein_g": 3.17,
    "salt_g": 1.29,
    "sat_fat_g": 0.959,
    "sodium_mg": 516.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171547",
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
