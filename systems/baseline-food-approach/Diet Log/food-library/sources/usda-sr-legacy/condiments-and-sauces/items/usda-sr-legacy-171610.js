/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Sauce, worcestershire",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 19.2,
    "energy_kcal": 321.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 5.3,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 800.0,
    "protein_g": 0.0,
    "salt_g": 3.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 1300.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171610",
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
