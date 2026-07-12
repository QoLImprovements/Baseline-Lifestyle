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
  "id": "usda-sr-legacy-172112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Chicken, nuggets, white meat, precooked, frozen, not reheated",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 16.2,
    "energy_kcal": 261.0,
    "fat_g": 15.4,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 1.43,
    "magnesium_mg": 35.0,
    "omega3_g": 0.558,
    "phosphorus_mg": 213.0,
    "potassium_mg": 281.0,
    "protein_g": 14.4,
    "salt_g": 1.345,
    "sat_fat_g": 3.37,
    "sodium_mg": 538.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172112",
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
