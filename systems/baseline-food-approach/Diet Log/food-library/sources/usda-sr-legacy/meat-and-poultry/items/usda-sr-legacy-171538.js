/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "can-14-5-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 435.0,
      "key": "can-14-5-oz",
      "kind": "unit",
      "label": "can 14.5 oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 960.0,
      "key": "container-32-oz",
      "kind": "unit",
      "label": "container 32 oz"
    }
  ],
  "name": "Soup, beef broth or bouillon canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.04,
    "energy_kcal": 7.0,
    "fat_g": 0.22,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.17,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 54.0,
    "protein_g": 1.14,
    "salt_g": 0.93,
    "sat_fat_g": 0.11,
    "sodium_mg": 372.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171538",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
