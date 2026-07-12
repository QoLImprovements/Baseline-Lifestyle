/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, MOTHER'S COCOA BUMPERS",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 89.9,
    "energy_kcal": 1600.0,
    "fat_g": 1.61,
    "fibre_g": 2.7,
    "folate_ug": 15.0,
    "iron_mg": 2.06,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 226.0,
    "protein_g": 4.21,
    "salt_g": 1.13,
    "sat_fat_g": 0.31,
    "sodium_mg": 452.0,
    "sugar_g": 43.1,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174634",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
