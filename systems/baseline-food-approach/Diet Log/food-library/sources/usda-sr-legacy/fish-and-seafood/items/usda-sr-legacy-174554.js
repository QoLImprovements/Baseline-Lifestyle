/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, clam chowder, manhattan, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.77,
    "energy_kcal": 126.0,
    "fat_g": 0.86,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.64,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 74.0,
    "protein_g": 0.85,
    "salt_g": 0.565,
    "sat_fat_g": 0.149,
    "sodium_mg": 226.0,
    "sugar_g": 1.32,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174554",
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
