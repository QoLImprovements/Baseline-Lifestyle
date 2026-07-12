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
  "id": "usda-sr-legacy-171188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.2,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Sauce, hot chile, sriracha, TUONG OT SRIRACHA",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 15.9,
    "energy_kcal": 330.0,
    "fat_g": 0.9,
    "fibre_g": 2.2,
    "folate_ug": 31.0,
    "iron_mg": 1.92,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 341.0,
    "protein_g": 1.86,
    "salt_g": 3.85,
    "sat_fat_g": 0.0,
    "sodium_mg": 1540.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 57.9,
    "vitamin_e_mg": 5.25,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171188",
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
