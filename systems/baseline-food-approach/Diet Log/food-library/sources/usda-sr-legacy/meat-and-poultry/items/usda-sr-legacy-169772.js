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
  "id": "usda-sr-legacy-169772",
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
  "name": "Taquitos, frozen, beef and cheese, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 33.5,
    "energy_kcal": 1200.0,
    "fat_g": 12.8,
    "fibre_g": 2.8,
    "folate_ug": 68.0,
    "iron_mg": 2.67,
    "magnesium_mg": 24.0,
    "omega3_g": 0.618,
    "phosphorus_mg": 137.0,
    "potassium_mg": 174.0,
    "protein_g": 9.4,
    "salt_g": 1.14,
    "sat_fat_g": 2.62,
    "sodium_mg": 456.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 22.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169772",
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
