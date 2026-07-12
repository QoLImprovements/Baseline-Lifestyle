/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chili, no beans, canned entree",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 6.1,
    "energy_kcal": 118.0,
    "fat_g": 7.1,
    "fibre_g": 0.5,
    "folate_ug": 8.0,
    "iron_mg": 2.01,
    "magnesium_mg": 20.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 77.0,
    "potassium_mg": 185.0,
    "protein_g": 7.53,
    "salt_g": 1.0275,
    "sat_fat_g": 2.26,
    "sodium_mg": 411.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172098",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "meals-entrees-and-side-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
