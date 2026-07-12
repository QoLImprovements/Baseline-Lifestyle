/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-turnover-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168963",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "piece-turnover-1-serving",
      "kind": "unit",
      "label": "piece turnover 1 serving"
    }
  ],
  "name": "Turnover, filled with egg, meat and cheese, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 20.7,
    "energy_kcal": 952.0,
    "fat_g": 12.6,
    "fibre_g": 0.8,
    "folate_ug": 46.0,
    "iron_mg": 2.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 111.0,
    "potassium_mg": 177.0,
    "protein_g": 7.87,
    "salt_g": 0.945,
    "sat_fat_g": 5.51,
    "sodium_mg": 378.0,
    "sugar_g": 7.87,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168963",
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
