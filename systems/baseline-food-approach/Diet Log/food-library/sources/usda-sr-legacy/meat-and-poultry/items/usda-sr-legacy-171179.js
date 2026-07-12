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
  "id": "usda-sr-legacy-171179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 413.0,
      "key": "can-14-5-oz",
      "kind": "unit",
      "label": "can 14.5 oz"
    },
    {
      "gramsPerUnit": 925.0,
      "key": "carton-32-oz",
      "kind": "unit",
      "label": "carton 32 oz"
    }
  ],
  "name": "Soup, SWANSON, beef broth, lower sodium",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.21,
    "energy_kcal": 27.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 23.0,
    "protein_g": 1.2,
    "salt_g": 0.45,
    "sat_fat_g": 0.03,
    "sodium_mg": 180.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171179",
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
