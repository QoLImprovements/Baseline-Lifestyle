/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    }
  ],
  "name": "Soup, cream of mushroom, low sodium, ready-to-serve, canned",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.53,
    "energy_kcal": 53.0,
    "fat_g": 3.7,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 0.21,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 41.0,
    "protein_g": 1.0,
    "salt_g": 0.05,
    "sat_fat_g": 1.0,
    "sodium_mg": 20.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171607",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fungi",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
