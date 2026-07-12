/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Ravioli, meat-filled, with tomato sauce or meat sauce, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 13.3,
    "energy_kcal": 405.0,
    "fat_g": 3.41,
    "fibre_g": 1.5,
    "folate_ug": 21.0,
    "iron_mg": 1.09,
    "magnesium_mg": 12.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 40.0,
    "potassium_mg": 178.0,
    "protein_g": 3.24,
    "salt_g": 0.7075,
    "sat_fat_g": 1.46,
    "sodium_mg": 283.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173329",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
