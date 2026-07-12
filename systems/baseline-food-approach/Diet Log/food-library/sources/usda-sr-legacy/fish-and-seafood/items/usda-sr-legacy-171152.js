/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    }
  ],
  "name": "Soup, clam chowder, manhattan, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.74,
    "energy_kcal": 61.0,
    "fat_g": 1.76,
    "fibre_g": 1.2,
    "folate_ug": 8.0,
    "iron_mg": 1.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 150.0,
    "protein_g": 1.74,
    "salt_g": 1.745,
    "sat_fat_g": 0.305,
    "sodium_mg": 698.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171152",
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
