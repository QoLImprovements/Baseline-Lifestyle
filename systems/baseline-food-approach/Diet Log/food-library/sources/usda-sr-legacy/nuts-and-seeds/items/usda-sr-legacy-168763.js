/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "miniature",
  "description": "Sweets",
  "id": "usda-sr-legacy-168763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "miniature",
      "kind": "unit",
      "label": "miniature"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "package-0-6-oz-1-cup",
      "kind": "unit",
      "label": "package 0.6 oz 1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "package-1-6-oz-2-cups",
      "kind": "unit",
      "label": "package 1.6 oz 2 cups"
    }
  ],
  "name": "Candies, REESE'S Peanut Butter Cups",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 55.4,
    "energy_kcal": 515.0,
    "fat_g": 30.5,
    "fibre_g": 3.6,
    "folate_ug": 50.0,
    "iron_mg": 1.21,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 343.0,
    "protein_g": 10.2,
    "salt_g": 0.8925,
    "sat_fat_g": 10.7,
    "sodium_mg": 357.0,
    "sugar_g": 47.2,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168763",
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
