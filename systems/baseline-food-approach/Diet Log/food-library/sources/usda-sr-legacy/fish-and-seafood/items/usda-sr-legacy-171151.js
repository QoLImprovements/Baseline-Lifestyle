/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171151",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 539.0,
      "key": "can-19-oz",
      "kind": "unit",
      "label": "can (19 oz)"
    }
  ],
  "name": "Soup, clam chowder, manhattan style, canned, chunky, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 7.84,
    "energy_kcal": 56.0,
    "fat_g": 1.41,
    "fibre_g": 1.2,
    "folate_ug": 4.0,
    "iron_mg": 1.1,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 160.0,
    "protein_g": 3.02,
    "salt_g": 1.0425,
    "sat_fat_g": 0.88,
    "sodium_mg": 417.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171151",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fish-and-seafood",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
