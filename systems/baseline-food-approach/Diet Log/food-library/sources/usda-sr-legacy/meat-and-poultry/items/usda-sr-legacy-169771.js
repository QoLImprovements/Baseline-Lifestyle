/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Taquitos, frozen, chicken and cheese, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 33.6,
    "energy_kcal": 284.0,
    "fat_g": 12.5,
    "fibre_g": 2.9,
    "folate_ug": 68.0,
    "iron_mg": 2.47,
    "magnesium_mg": 24.0,
    "omega3_g": 0.593,
    "phosphorus_mg": 132.0,
    "potassium_mg": 155.0,
    "protein_g": 9.21,
    "salt_g": 1.1325,
    "sat_fat_g": 2.31,
    "sodium_mg": 453.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 16.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169771",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
