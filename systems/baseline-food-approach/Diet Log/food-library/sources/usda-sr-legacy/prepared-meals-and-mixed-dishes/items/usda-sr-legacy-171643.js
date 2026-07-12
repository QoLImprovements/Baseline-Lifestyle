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
  "id": "usda-sr-legacy-171643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, CAP'N CRUNCH with CRUNCHBERRIES",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 85.9,
    "energy_kcal": 397.0,
    "fat_g": 4.83,
    "fibre_g": 2.6,
    "folate_ug": 1630.0,
    "iron_mg": 19.8,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 187.0,
    "protein_g": 4.45,
    "salt_g": 1.8125,
    "sat_fat_g": 3.08,
    "sodium_mg": 725.0,
    "sugar_g": 44.2,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171643",
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
