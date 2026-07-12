/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-1-89-oz-2-bars",
  "description": "Sweets",
  "id": "usda-sr-legacy-168769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "package-1-89-oz-2-bars",
      "kind": "unit",
      "label": "package (1.89 oz, 2 bars)"
    },
    {
      "gramsPerUnit": 267.0,
      "key": "package-9-43-oz",
      "kind": "unit",
      "label": "package (9.43 oz)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "package-1-77-oz",
      "kind": "unit",
      "label": "package (1.77 oz)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "package-2-06-oz-2-bars",
      "kind": "unit",
      "label": "package (2.06 oz, 2 bars)"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, TWIX Peanut Butter Cookie Bars",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 54.1,
    "energy_kcal": 2290.0,
    "fat_g": 32.7,
    "fibre_g": 3.1,
    "folate_ug": 15.0,
    "iron_mg": 1.32,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 264.0,
    "protein_g": 9.18,
    "salt_g": 0.565,
    "sat_fat_g": 15.8,
    "sodium_mg": 226.0,
    "sugar_g": 36.1,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 3.42,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168769",
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
