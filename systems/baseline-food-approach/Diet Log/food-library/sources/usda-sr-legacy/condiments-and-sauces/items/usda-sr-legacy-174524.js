/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Sauce, salsa, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 6.64,
    "energy_kcal": 121.0,
    "fat_g": 0.17,
    "fibre_g": 1.9,
    "folate_ug": 4.0,
    "iron_mg": 0.42,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 275.0,
    "protein_g": 1.52,
    "salt_g": 1.7775,
    "sat_fat_g": 0.021,
    "sodium_mg": 711.0,
    "sugar_g": 4.01,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174524",
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
