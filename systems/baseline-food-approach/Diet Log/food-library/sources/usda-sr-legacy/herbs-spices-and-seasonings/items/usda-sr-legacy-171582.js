/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "0-25-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, pesto, CLASSICO, basil pesto, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 6.93,
    "energy_kcal": 1560.0,
    "fat_g": 36.4,
    "fibre_g": 2.1,
    "folate_ug": 29.0,
    "iron_mg": 0.71,
    "magnesium_mg": 40.0,
    "omega3_g": 2.291,
    "phosphorus_mg": 97.0,
    "potassium_mg": 195.0,
    "protein_g": 4.16,
    "salt_g": 2.575,
    "sat_fat_g": 6.72,
    "sodium_mg": 1030.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.61,
    "vitamin_k_ug": 194.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171582",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "herbs-spices-and-seasonings",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
