/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "10-small",
  "description": "Sweets",
  "id": "usda-sr-legacy-167991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "10-small",
      "kind": "unit",
      "label": "10 small"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "10-large-1-oz",
      "kind": "unit",
      "label": "10 large (1 oz)"
    }
  ],
  "name": "Candies, jellybeans",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 93.6,
    "energy_kcal": 375.0,
    "fat_g": 0.05,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.13,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 37.0,
    "protein_g": 0.0,
    "salt_g": 0.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 50.0,
    "sugar_g": 70.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167991",
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
