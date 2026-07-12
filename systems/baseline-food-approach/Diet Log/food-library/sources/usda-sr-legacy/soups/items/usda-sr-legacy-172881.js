/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "can-11-oz-undiluted",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172881",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "can-11-oz-undiluted",
      "kind": "unit",
      "label": "can (11 oz), undiluted"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Soup, tomato bisque, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 18.5,
    "energy_kcal": 96.0,
    "fat_g": 1.95,
    "fibre_g": 0.8,
    "folate_ug": 12.0,
    "iron_mg": 0.64,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 325.0,
    "protein_g": 1.76,
    "salt_g": 1.745,
    "sat_fat_g": 0.42,
    "sodium_mg": 698.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172881",
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
