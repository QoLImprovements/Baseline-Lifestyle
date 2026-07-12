/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-67-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-169075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-67-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.67 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, ALPEN",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 75.7,
    "energy_kcal": 352.0,
    "fat_g": 3.3,
    "fibre_g": 9.1,
    "folate_ug": 30.0,
    "iron_mg": 3.0,
    "magnesium_mg": 94.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 371.0,
    "potassium_mg": 418.0,
    "protein_g": 11.2,
    "salt_g": 0.0675,
    "sat_fat_g": 0.496,
    "sodium_mg": 27.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169075",
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
