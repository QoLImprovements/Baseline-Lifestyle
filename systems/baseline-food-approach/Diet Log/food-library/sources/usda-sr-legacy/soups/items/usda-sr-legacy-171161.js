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
  "id": "usda-sr-legacy-171161",
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
    },
    {
      "gramsPerUnit": 298.0,
      "key": "can-10-5-oz",
      "kind": "unit",
      "label": "can (10.5 oz)"
    }
  ],
  "name": "Soup, vegetarian vegetable, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 9.78,
    "energy_kcal": 59.0,
    "fat_g": 1.58,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 0.88,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 171.0,
    "protein_g": 1.72,
    "salt_g": 1.29,
    "sat_fat_g": 0.24,
    "sodium_mg": 516.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 142.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171161",
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
