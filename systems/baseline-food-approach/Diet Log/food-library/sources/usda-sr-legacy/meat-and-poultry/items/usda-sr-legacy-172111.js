/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Chicken, nuggets, dark and white meat, precooked, frozen, not reheated",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 16.1,
    "energy_kcal": 268.0,
    "fat_g": 17.3,
    "fibre_g": 1.6,
    "folate_ug": 35.0,
    "iron_mg": 0.95,
    "magnesium_mg": 25.0,
    "omega3_g": 0.458,
    "phosphorus_mg": 165.0,
    "potassium_mg": 206.0,
    "protein_g": 12.0,
    "salt_g": 1.35,
    "sat_fat_g": 3.6,
    "sodium_mg": 540.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172111",
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
