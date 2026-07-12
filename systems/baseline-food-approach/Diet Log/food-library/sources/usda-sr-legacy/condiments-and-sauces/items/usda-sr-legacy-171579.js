/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-25-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, pesto, ready-to-serve, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 306.0,
    "carbs_g": 10.1,
    "energy_kcal": 418.0,
    "fat_g": 37.6,
    "fibre_g": 1.8,
    "folate_ug": 16.0,
    "iron_mg": 0.57,
    "magnesium_mg": 47.0,
    "omega3_g": 1.276,
    "phosphorus_mg": 273.0,
    "potassium_mg": 560.0,
    "protein_g": 9.83,
    "salt_g": 1.5075,
    "sat_fat_g": 7.07,
    "sodium_mg": 603.0,
    "sugar_g": 6.33,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.27,
    "vitamin_k_ug": 151.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171579",
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
