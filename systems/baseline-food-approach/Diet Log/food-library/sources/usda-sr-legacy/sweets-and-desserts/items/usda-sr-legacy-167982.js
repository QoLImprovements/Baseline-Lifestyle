/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "patty-1-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "patty-1-5-oz",
      "kind": "unit",
      "label": "patty 1.5 oz"
    }
  ],
  "name": "Candies, YORK Peppermint Pattie",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 81.0,
    "energy_kcal": 384.0,
    "fat_g": 7.17,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 0.92,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 111.0,
    "protein_g": 2.19,
    "salt_g": 0.07,
    "sat_fat_g": 4.34,
    "sodium_mg": 28.0,
    "sugar_g": 63.8,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167982",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
