/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171552",
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
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    }
  ],
  "name": "Soup, cream of onion, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.4,
    "energy_kcal": 88.0,
    "fat_g": 4.2,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 0.5,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 98.0,
    "protein_g": 2.2,
    "salt_g": 1.5925,
    "sat_fat_g": 1.17,
    "sodium_mg": 637.0,
    "sugar_g": 3.64,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171552",
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
