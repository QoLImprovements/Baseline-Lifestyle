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
  "id": "usda-sr-legacy-172880",
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
  "name": "Sauce, pizza, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 8.66,
    "energy_kcal": 226.0,
    "fat_g": 1.15,
    "fibre_g": 2.0,
    "folate_ug": 10.0,
    "iron_mg": 0.9,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 354.0,
    "protein_g": 2.18,
    "salt_g": 0.87,
    "sat_fat_g": 0.46,
    "sodium_mg": 348.0,
    "sugar_g": 3.78,
    "vitamin_a_ug": 667.0,
    "vitamin_c_mg": 11.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172880",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
