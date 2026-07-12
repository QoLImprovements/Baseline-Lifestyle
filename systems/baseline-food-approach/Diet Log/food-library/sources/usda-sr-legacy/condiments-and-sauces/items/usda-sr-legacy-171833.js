/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Sauce, horseradish",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 10.0,
    "energy_kcal": 2100.0,
    "fat_g": 50.9,
    "fibre_g": 1.0,
    "folate_ug": 1.0,
    "iron_mg": 0.23,
    "magnesium_mg": 6.0,
    "omega3_g": 3.417,
    "phosphorus_mg": 19.0,
    "potassium_mg": 44.0,
    "protein_g": 1.09,
    "salt_g": 1.825,
    "sat_fat_g": 8.23,
    "sodium_mg": 730.0,
    "sugar_g": 8.98,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.19,
    "vitamin_k_ug": 91.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171833",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "condiments-and-sauces",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
