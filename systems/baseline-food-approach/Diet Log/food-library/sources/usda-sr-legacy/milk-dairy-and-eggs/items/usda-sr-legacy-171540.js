/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "can-10-75-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, cream of celery, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 7.03,
    "energy_kcal": 72.0,
    "fat_g": 4.46,
    "fibre_g": 0.6,
    "folate_ug": 2.0,
    "iron_mg": 0.5,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 98.0,
    "protein_g": 1.32,
    "salt_g": 1.29,
    "sat_fat_g": 1.12,
    "sodium_mg": 516.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171540",
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
