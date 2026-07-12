/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar-1-76-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167994",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "bar-1-76-oz",
      "kind": "unit",
      "label": "bar (1.76 oz)"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, MARS Almond Bar",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 62.7,
    "energy_kcal": 467.0,
    "fat_g": 23.0,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 1.1,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 325.0,
    "protein_g": 8.1,
    "salt_g": 0.425,
    "sat_fat_g": 7.27,
    "sodium_mg": 170.0,
    "sugar_g": 52.1,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 7.75,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167994",
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
