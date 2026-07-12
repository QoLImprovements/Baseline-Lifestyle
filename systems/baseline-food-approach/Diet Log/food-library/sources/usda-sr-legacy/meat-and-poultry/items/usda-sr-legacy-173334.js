/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-center",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173334",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 278.0,
      "key": "piece-center",
      "kind": "unit",
      "label": "piece center"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "piece-corner",
      "kind": "unit",
      "label": "piece corner"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "piece-side",
      "kind": "unit",
      "label": "piece side"
    }
  ],
  "name": "Lasagna with meat & sauce, frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 14.4,
    "energy_kcal": 124.0,
    "fat_g": 4.42,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.65,
    "magnesium_mg": 18.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 102.0,
    "potassium_mg": 184.0,
    "protein_g": 6.63,
    "salt_g": 0.8675,
    "sat_fat_g": 2.07,
    "sodium_mg": 347.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173334",
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
