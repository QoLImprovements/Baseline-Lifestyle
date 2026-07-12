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
  "id": "usda-sr-legacy-173893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, RALSTON TASTEEOS",
  "nutritionPerBasis": {
    "calcium_mg": 357.0,
    "carbs_g": 76.0,
    "energy_kcal": 395.0,
    "fat_g": 5.36,
    "fibre_g": 10.7,
    "folate_ug": 714.0,
    "iron_mg": 32.1,
    "magnesium_mg": 143.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 536.0,
    "potassium_mg": 607.0,
    "protein_g": 10.7,
    "salt_g": 1.4275,
    "sat_fat_g": 0.926,
    "sodium_mg": 571.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 1070.0,
    "vitamin_c_mg": 21.4,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173893",
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
