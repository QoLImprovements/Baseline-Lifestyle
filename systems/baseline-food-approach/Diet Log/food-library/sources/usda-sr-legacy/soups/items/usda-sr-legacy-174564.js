/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "can-10-5-oz-prepared",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 586.0,
      "key": "can-10-5-oz-prepared",
      "kind": "unit",
      "label": "can (10.5 oz), prepared"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, vegetarian vegetable, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.89,
    "energy_kcal": 28.0,
    "fat_g": 0.79,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.44,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 86.0,
    "protein_g": 0.86,
    "salt_g": 0.845,
    "sat_fat_g": 0.12,
    "sodium_mg": 338.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174564",
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
