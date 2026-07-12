/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-corner",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "piece-corner",
      "kind": "unit",
      "label": "piece corner"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "piece-side",
      "kind": "unit",
      "label": "piece side"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "piece-center",
      "kind": "unit",
      "label": "piece center"
    }
  ],
  "name": "Lasagna with meat sauce, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 15.4,
    "energy_kcal": 564.0,
    "fat_g": 4.92,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 0.71,
    "magnesium_mg": 20.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 115.0,
    "potassium_mg": 196.0,
    "protein_g": 7.28,
    "salt_g": 0.9325,
    "sat_fat_g": 2.35,
    "sodium_mg": 373.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172114",
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
