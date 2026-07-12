/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, chunky vegetable, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.9,
    "energy_kcal": 39.0,
    "fat_g": 0.36,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.51,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 180.0,
    "protein_g": 1.14,
    "salt_g": 0.6675,
    "sat_fat_g": 0.045,
    "sodium_mg": 267.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171559",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
