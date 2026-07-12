/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving-about-1-4-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "serving-about-1-4-cup",
      "kind": "unit",
      "label": "serving about 1/4 cup"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "serving-1-31-oz-bag",
      "kind": "unit",
      "label": "serving 1.31 oz bag"
    },
    {
      "gramsPerUnit": 3.4,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, M&M's Almond Chocolate Candies",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 60.5,
    "energy_kcal": 2180.0,
    "fat_g": 27.8,
    "fibre_g": 5.6,
    "folate_ug": 12.0,
    "iron_mg": 1.73,
    "magnesium_mg": 116.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 381.0,
    "protein_g": 7.53,
    "salt_g": 0.1125,
    "sat_fat_g": 9.44,
    "sodium_mg": 45.0,
    "sugar_g": 49.2,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 9.52,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168108",
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
