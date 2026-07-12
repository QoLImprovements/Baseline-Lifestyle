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
  "id": "usda-sr-legacy-174528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "0-25-tsp",
      "kind": "unit",
      "label": "0.25 tsp"
    }
  ],
  "name": "Sauce, ready-to-serve, pepper, TABASCO",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.8,
    "energy_kcal": 12.0,
    "fat_g": 0.76,
    "fibre_g": 0.6,
    "folate_ug": 1.0,
    "iron_mg": 1.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 128.0,
    "protein_g": 1.29,
    "salt_g": 1.5825,
    "sat_fat_g": 0.106,
    "sodium_mg": 633.0,
    "sugar_g": 0.13,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174528",
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
