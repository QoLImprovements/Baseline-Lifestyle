/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "corndog",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "corndog",
      "kind": "unit",
      "label": "corndog"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "corndog-mini",
      "kind": "unit",
      "label": "corndog mini"
    }
  ],
  "name": "Corn dogs, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 27.0,
    "energy_kcal": 250.0,
    "fat_g": 12.0,
    "fibre_g": 1.0,
    "folate_ug": 60.0,
    "iron_mg": 1.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.191,
    "phosphorus_mg": 224.0,
    "potassium_mg": 125.0,
    "protein_g": 8.57,
    "salt_g": 1.67,
    "sat_fat_g": 3.47,
    "sodium_mg": 668.0,
    "sugar_g": 7.54,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173345",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
