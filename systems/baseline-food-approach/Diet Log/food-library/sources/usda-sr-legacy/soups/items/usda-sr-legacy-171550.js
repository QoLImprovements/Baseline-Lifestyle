/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 539.0,
      "key": "can-19-oz",
      "kind": "unit",
      "label": "can (19 oz)"
    }
  ],
  "name": "Soup, minestrone, canned, chunky, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 8.64,
    "energy_kcal": 53.0,
    "fat_g": 1.17,
    "fibre_g": 2.4,
    "folate_ug": 22.0,
    "iron_mg": 0.74,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 255.0,
    "protein_g": 2.13,
    "salt_g": 0.72,
    "sat_fat_g": 0.62,
    "sodium_mg": 288.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171550",
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
