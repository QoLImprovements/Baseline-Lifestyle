/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-167689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 2.2,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "serving-1-63-oz-singles-bag",
      "kind": "unit",
      "label": "serving 1.63 oz singles bag"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, M&M's Peanut Butter Chocolate Candies",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 56.9,
    "energy_kcal": 529.0,
    "fat_g": 29.3,
    "fibre_g": 4.0,
    "folate_ug": 45.0,
    "iron_mg": 1.06,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 330.0,
    "protein_g": 10.2,
    "salt_g": 0.5325,
    "sat_fat_g": 18.5,
    "sodium_mg": 213.0,
    "sugar_g": 47.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167689",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
