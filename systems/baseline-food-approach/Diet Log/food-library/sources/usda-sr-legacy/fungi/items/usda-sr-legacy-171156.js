/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171156",
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
  "name": "Soup, mushroom with beef stock, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 7.41,
    "energy_kcal": 68.0,
    "fat_g": 3.21,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.67,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 126.0,
    "protein_g": 2.51,
    "salt_g": 1.9325,
    "sat_fat_g": 1.24,
    "sodium_mg": 773.0,
    "sugar_g": 2.28,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171156",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fungi",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
