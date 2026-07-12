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
  "id": "usda-sr-legacy-172890",
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
      "label": "2 Tbsp"
    }
  ],
  "name": "Sauce, teriyaki, ready-to-serve, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 15.6,
    "energy_kcal": 89.0,
    "fat_g": 0.02,
    "fibre_g": 0.1,
    "folate_ug": 8.0,
    "iron_mg": 1.7,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 225.0,
    "protein_g": 5.93,
    "salt_g": 4.45,
    "sat_fat_g": 0.0,
    "sodium_mg": 1780.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172890",
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
