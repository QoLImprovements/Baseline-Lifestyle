/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171176",
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
  "name": "Soup, tomato, canned, prepared with equal volume water, commercial",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 7.45,
    "energy_kcal": 135.0,
    "fat_g": 0.21,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 275.0,
    "protein_g": 0.71,
    "salt_g": 0.465,
    "sat_fat_g": 0.056,
    "sodium_mg": 186.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171176",
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
