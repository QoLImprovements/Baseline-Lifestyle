/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 319.0,
      "key": "can-11-25-oz",
      "kind": "unit",
      "label": "can (11.25 oz)"
    }
  ],
  "name": "Soup, chili beef, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 18.9,
    "energy_kcal": 117.0,
    "fat_g": 2.53,
    "fibre_g": 2.5,
    "folate_ug": 9.0,
    "iron_mg": 1.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 400.0,
    "protein_g": 5.09,
    "salt_g": 1.97,
    "sat_fat_g": 1.24,
    "sodium_mg": 788.0,
    "sugar_g": 5.09,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171150",
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
