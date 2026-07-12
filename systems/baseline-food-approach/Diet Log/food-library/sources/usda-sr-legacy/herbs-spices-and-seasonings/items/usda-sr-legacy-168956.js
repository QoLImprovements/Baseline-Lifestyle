/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "serving-2-oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving-2-oz",
      "kind": "unit",
      "label": "serving (2 oz)"
    }
  ],
  "name": "Yellow rice with seasoning, dry packet mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 74.7,
    "energy_kcal": 1430.0,
    "fat_g": 1.75,
    "fibre_g": 1.8,
    "folate_ug": 140.0,
    "iron_mg": 2.53,
    "magnesium_mg": 112.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 174.0,
    "potassium_mg": 801.0,
    "protein_g": 7.02,
    "salt_g": 3.3,
    "sat_fat_g": 0.0,
    "sodium_mg": 1320.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168956",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "herbs-spices-and-seasonings",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
