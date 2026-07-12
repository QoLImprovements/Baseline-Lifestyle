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
  "id": "usda-sr-legacy-171613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 3.6,
      "key": "cube",
      "kind": "unit",
      "label": "cube"
    }
  ],
  "name": "Soup, bouillon cubes and granules, low sodium, dry",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 64.9,
    "energy_kcal": 1830.0,
    "fat_g": 13.9,
    "fibre_g": 0.2,
    "folate_ug": 21.0,
    "iron_mg": 1.03,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 309.0,
    "protein_g": 16.7,
    "salt_g": 2.675,
    "sat_fat_g": 3.43,
    "sodium_mg": 1070.0,
    "sugar_g": 14.5,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 66.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171613",
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
