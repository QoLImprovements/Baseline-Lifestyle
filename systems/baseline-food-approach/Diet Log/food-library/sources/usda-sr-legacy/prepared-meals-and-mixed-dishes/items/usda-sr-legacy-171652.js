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
  "id": "usda-sr-legacy-171652",
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
  "name": "Cereals ready-to-eat, POST, GOLDEN CRISP",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 90.1,
    "energy_kcal": 1590.0,
    "fat_g": 1.7,
    "fibre_g": 5.0,
    "folate_ug": 370.0,
    "iron_mg": 6.7,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 176.0,
    "protein_g": 5.5,
    "salt_g": 0.2375,
    "sat_fat_g": 0.2,
    "sodium_mg": 95.0,
    "sugar_g": 53.6,
    "vitamin_a_ug": 832.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171652",
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
