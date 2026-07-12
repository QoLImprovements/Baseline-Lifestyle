/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174070",
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
  "name": "Sauce, peanut, made from peanut butter, water, soy sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 22.0,
    "energy_kcal": 257.0,
    "fat_g": 16.0,
    "fibre_g": 1.8,
    "folate_ug": 22.0,
    "iron_mg": 0.91,
    "magnesium_mg": 45.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 107.0,
    "potassium_mg": 235.0,
    "protein_g": 6.31,
    "salt_g": 3.35,
    "sat_fat_g": 2.91,
    "sodium_mg": 1340.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174070",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "nuts-and-seeds",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
