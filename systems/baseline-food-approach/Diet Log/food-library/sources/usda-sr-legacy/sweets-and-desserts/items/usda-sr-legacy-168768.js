/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-2-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "package-2-oz",
      "kind": "unit",
      "label": "package (2 oz)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "package-2-06-oz-2-bars",
      "kind": "unit",
      "label": "package (2.06 oz, 2 bars)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "package-11-oz",
      "kind": "unit",
      "label": "package (11 oz)"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "package-king-size-3-35-oz-4-bars",
      "kind": "unit",
      "label": "package, king size (3.35 oz, 4 bars)"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, TWIX Caramel Cookie Bars",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 64.8,
    "energy_kcal": 2100.0,
    "fat_g": 24.8,
    "fibre_g": 1.1,
    "folate_ug": 26.0,
    "iron_mg": 0.81,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 186.0,
    "protein_g": 4.91,
    "salt_g": 0.495,
    "sat_fat_g": 19.0,
    "sodium_mg": 198.0,
    "sugar_g": 48.2,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168768",
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
