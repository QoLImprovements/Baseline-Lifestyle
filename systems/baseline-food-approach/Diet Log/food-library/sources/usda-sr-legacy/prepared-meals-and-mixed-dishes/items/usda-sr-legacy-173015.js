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
  "id": "usda-sr-legacy-173015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS with vanilla bunches",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 81.8,
    "energy_kcal": 394.0,
    "fat_g": 5.1,
    "fibre_g": 7.8,
    "folate_ug": 357.0,
    "iron_mg": 28.9,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 232.0,
    "potassium_mg": 262.0,
    "protein_g": 7.9,
    "salt_g": 0.6675,
    "sat_fat_g": 0.6,
    "sodium_mg": 267.0,
    "sugar_g": 20.7,
    "vitamin_a_ug": 527.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173015",
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
