/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    }
  ],
  "name": "Soup, clam chowder, new england, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.05,
    "energy_kcal": 35.0,
    "fat_g": 1.01,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 1.22,
    "magnesium_mg": 7.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 127.0,
    "potassium_mg": 108.0,
    "protein_g": 1.55,
    "salt_g": 0.635,
    "sat_fat_g": 0.468,
    "sodium_mg": 254.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174555",
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
