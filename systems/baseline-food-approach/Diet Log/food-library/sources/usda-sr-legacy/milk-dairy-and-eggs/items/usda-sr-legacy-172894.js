/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172894",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 609.0,
      "key": "can-11-oz-prepared",
      "kind": "unit",
      "label": "can (11 oz), prepared"
    }
  ],
  "name": "Soup, cheese, canned, prepared with equal volume milk",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 6.47,
    "energy_kcal": 92.0,
    "fat_g": 5.8,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.32,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 136.0,
    "protein_g": 3.77,
    "salt_g": 1.015,
    "sat_fat_g": 3.63,
    "sodium_mg": 406.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 143.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172894",
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
