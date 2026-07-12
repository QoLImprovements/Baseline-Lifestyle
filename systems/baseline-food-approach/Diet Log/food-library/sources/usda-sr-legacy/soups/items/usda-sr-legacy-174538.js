/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, vegetable, canned, low sodium, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 12.1,
    "energy_kcal": 273.0,
    "fat_g": 0.9,
    "fibre_g": 2.1,
    "folate_ug": 12.0,
    "iron_mg": 0.66,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 433.0,
    "protein_g": 2.2,
    "salt_g": 0.9625,
    "sat_fat_g": 0.147,
    "sodium_mg": 385.0,
    "sugar_g": 4.31,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174538",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
