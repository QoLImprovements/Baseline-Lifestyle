/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-2-1-oz-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "serving-2-1-oz-bar",
      "kind": "unit",
      "label": "serving 2.1 oz bar"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "serving-fun-size-bar-0-65-oz",
      "kind": "unit",
      "label": "serving fun size bar 0.65 oz"
    }
  ],
  "name": "Candies, NESTLE, BABY RUTH Bar",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 64.8,
    "energy_kcal": 1990.0,
    "fat_g": 21.6,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 0.63,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 249.0,
    "protein_g": 5.4,
    "salt_g": 0.575,
    "sat_fat_g": 12.1,
    "sodium_mg": 230.0,
    "sugar_g": 54.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167582",
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
