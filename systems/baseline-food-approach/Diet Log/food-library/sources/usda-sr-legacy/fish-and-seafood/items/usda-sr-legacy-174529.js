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
  "id": "usda-sr-legacy-174529",
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
  "name": "Sauce, oyster, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 10.9,
    "energy_kcal": 51.0,
    "fat_g": 0.25,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 0.18,
    "magnesium_mg": 4.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 22.0,
    "potassium_mg": 54.0,
    "protein_g": 1.35,
    "salt_g": 6.825,
    "sat_fat_g": 0.043,
    "sodium_mg": 2730.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174529",
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
