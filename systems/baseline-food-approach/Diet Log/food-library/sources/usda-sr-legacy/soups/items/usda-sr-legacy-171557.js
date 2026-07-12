/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "can-11-oz-undiluted",
      "kind": "unit",
      "label": "can (11 oz), undiluted"
    }
  ],
  "name": "Soup, tomato rice, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 17.1,
    "energy_kcal": 93.0,
    "fat_g": 2.12,
    "fibre_g": 1.3,
    "folate_ug": 11.0,
    "iron_mg": 0.62,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 257.0,
    "protein_g": 1.64,
    "salt_g": 1.5875,
    "sat_fat_g": 0.4,
    "sodium_mg": 635.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 1.73,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171557",
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
