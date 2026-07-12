/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Sauce, fish, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 3.64,
    "energy_kcal": 35.0,
    "fat_g": 0.01,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 0.78,
    "magnesium_mg": 175.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 7.0,
    "potassium_mg": 288.0,
    "protein_g": 5.06,
    "salt_g": 19.625,
    "sat_fat_g": 0.003,
    "sodium_mg": 7850.0,
    "sugar_g": 3.64,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174531",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "fish-and-seafood",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
