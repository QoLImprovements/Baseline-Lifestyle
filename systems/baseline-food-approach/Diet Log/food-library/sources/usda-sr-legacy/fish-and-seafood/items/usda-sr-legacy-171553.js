/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "can-10-5-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "can-10-5-oz",
      "kind": "unit",
      "label": "can (10.5 oz)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    }
  ],
  "name": "Soup, oyster stew, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 3.32,
    "energy_kcal": 48.0,
    "fat_g": 3.13,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.8,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 40.0,
    "protein_g": 1.72,
    "salt_g": 1.805,
    "sat_fat_g": 2.04,
    "sodium_mg": 722.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171553",
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
