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
  "id": "usda-sr-legacy-173886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, QUAKER CRUNCHY BRAN",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 83.7,
    "energy_kcal": 1380.0,
    "fat_g": 4.06,
    "fibre_g": 15.3,
    "folate_ug": 1550.0,
    "iron_mg": 31.0,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 186.0,
    "potassium_mg": 239.0,
    "protein_g": 6.37,
    "salt_g": 1.8975,
    "sat_fat_g": 2.03,
    "sodium_mg": 759.0,
    "sugar_g": 20.7,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173886",
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
