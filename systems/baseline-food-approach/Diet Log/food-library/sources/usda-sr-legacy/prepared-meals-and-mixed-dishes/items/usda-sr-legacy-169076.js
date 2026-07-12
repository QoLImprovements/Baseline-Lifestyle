/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-169076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, FAMILIA",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 73.8,
    "energy_kcal": 1620.0,
    "fat_g": 6.3,
    "fibre_g": 8.5,
    "folate_ug": 16.0,
    "iron_mg": 2.78,
    "magnesium_mg": 317.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 337.0,
    "potassium_mg": 494.0,
    "protein_g": 9.5,
    "salt_g": 0.02,
    "sat_fat_g": 0.711,
    "sodium_mg": 8.0,
    "sugar_g": 23.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169076",
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
