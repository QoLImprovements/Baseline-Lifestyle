/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "can-10-7-oz-10-75-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 303.0,
      "key": "can-10-7-oz-10-75-oz",
      "kind": "unit",
      "label": "can 10.7 oz (10.75 oz)"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Soup, broccoli cheese, canned, condensed, commercial",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 7.7,
    "energy_kcal": 364.0,
    "fat_g": 5.3,
    "fibre_g": 1.8,
    "folate_ug": 40.0,
    "iron_mg": 0.3,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 207.0,
    "protein_g": 2.1,
    "salt_g": 1.6525,
    "sat_fat_g": 1.6,
    "sodium_mg": 661.0,
    "sugar_g": 2.12,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 51.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171178",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
