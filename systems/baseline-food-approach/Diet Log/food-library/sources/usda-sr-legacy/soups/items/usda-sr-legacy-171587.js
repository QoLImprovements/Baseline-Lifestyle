/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    },
    {
      "gramsPerUnit": 303.0,
      "key": "can-10-7-oz",
      "kind": "unit",
      "label": "can 10.7 oz"
    }
  ],
  "name": "Soup, tomato, canned, condensed, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.4,
    "energy_kcal": 65.0,
    "fat_g": 0.56,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 229.0,
    "protein_g": 1.61,
    "salt_g": 0.055,
    "sat_fat_g": 0.155,
    "sodium_mg": 22.0,
    "sugar_g": 8.11,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171587",
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
