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
  "id": "usda-sr-legacy-171681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Honey Nut SCOOTERS",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 79.6,
    "energy_kcal": 387.0,
    "fat_g": 4.51,
    "fibre_g": 6.3,
    "folate_ug": 667.0,
    "iron_mg": 30.0,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 241.0,
    "protein_g": 8.59,
    "salt_g": 1.7375,
    "sat_fat_g": 0.63,
    "sodium_mg": 695.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 1670.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171681",
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
