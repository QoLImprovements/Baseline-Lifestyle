/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, MOTHER'S GRAHAM BUMPERS",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 88.9,
    "energy_kcal": 379.0,
    "fat_g": 1.45,
    "fibre_g": 2.6,
    "folate_ug": 15.0,
    "iron_mg": 1.87,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 199.0,
    "protein_g": 4.55,
    "salt_g": 1.895,
    "sat_fat_g": 0.28,
    "sodium_mg": 758.0,
    "sugar_g": 44.3,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174633",
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
