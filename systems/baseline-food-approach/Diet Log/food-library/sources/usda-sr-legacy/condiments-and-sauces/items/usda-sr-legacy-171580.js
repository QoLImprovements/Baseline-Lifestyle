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
  "id": "usda-sr-legacy-171580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, pesto, ready-to-serve, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 6.14,
    "energy_kcal": 1780.0,
    "fat_g": 42.4,
    "fibre_g": 1.7,
    "folate_ug": 27.0,
    "iron_mg": 0.88,
    "magnesium_mg": 45.0,
    "omega3_g": 1.751,
    "phosphorus_mg": 132.0,
    "potassium_mg": 205.0,
    "protein_g": 5.0,
    "salt_g": 2.495,
    "sat_fat_g": 7.36,
    "sodium_mg": 998.0,
    "sugar_g": 1.92,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 8.86,
    "vitamin_k_ug": 194.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171580",
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
