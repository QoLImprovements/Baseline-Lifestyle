/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 407.0,
      "key": "can-14-5-oz",
      "kind": "unit",
      "label": "can (14.5 oz)"
    },
    {
      "gramsPerUnit": 923.0,
      "key": "carton-32-oz",
      "kind": "unit",
      "label": "carton (32 oz)"
    }
  ],
  "name": "Soup, beef broth, less/reduced sodium, ready to serve",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.2,
    "energy_kcal": 6.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 20.0,
    "protein_g": 1.14,
    "salt_g": 0.5625,
    "sat_fat_g": 0.042,
    "sodium_mg": 225.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172889",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
