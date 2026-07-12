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
  "id": "usda-sr-legacy-172100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "serving-1-nlea-serving",
      "kind": "unit",
      "label": "serving (1 NLEA serving)"
    }
  ],
  "name": "Pasta with tomato sauce, no meat, canned",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.9,
    "energy_kcal": 71.0,
    "fat_g": 0.71,
    "fibre_g": 0.9,
    "folate_ug": 26.0,
    "iron_mg": 0.91,
    "magnesium_mg": 14.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 39.0,
    "potassium_mg": 192.0,
    "protein_g": 2.22,
    "salt_g": 0.9525,
    "sat_fat_g": 0.167,
    "sodium_mg": 381.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172100",
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
