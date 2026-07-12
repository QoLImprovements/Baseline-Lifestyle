/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-1-76-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "package-1-76-oz",
      "kind": "unit",
      "label": "package 1.76 oz"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "bar-snack-size",
      "kind": "unit",
      "label": "bar snack size"
    }
  ],
  "name": "Candies, ALMOND JOY Candy Bar",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 59.5,
    "energy_kcal": 479.0,
    "fat_g": 26.9,
    "fibre_g": 5.0,
    "folate_ug": 0.0,
    "iron_mg": 1.27,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 254.0,
    "protein_g": 4.13,
    "salt_g": 0.355,
    "sat_fat_g": 17.6,
    "sodium_mg": 142.0,
    "sugar_g": 48.3,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167562",
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
