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
  "id": "usda-sr-legacy-174643",
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
    },
    {
      "gramsPerUnit": 37.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, GOLDEN PUFFS",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 89.7,
    "energy_kcal": 370.0,
    "fat_g": 0.89,
    "fibre_g": 2.6,
    "folate_ug": 741.0,
    "iron_mg": 7.92,
    "magnesium_mg": 46.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 222.0,
    "potassium_mg": 204.0,
    "protein_g": 5.77,
    "salt_g": 0.51,
    "sat_fat_g": 0.161,
    "sodium_mg": 204.0,
    "sugar_g": 51.3,
    "vitamin_a_ug": 555.0,
    "vitamin_c_mg": 27.6,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174643",
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
