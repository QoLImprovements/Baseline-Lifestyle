/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 385.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 422.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Turkey, stuffing, mashed potatoes w/gravy, assorted vegetables, frozen, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 16.3,
    "energy_kcal": 536.0,
    "fat_g": 3.89,
    "fibre_g": 1.3,
    "folate_ug": 24.0,
    "iron_mg": 0.79,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 230.0,
    "protein_g": 6.97,
    "salt_g": 0.815,
    "sat_fat_g": 0.877,
    "sodium_mg": 326.0,
    "sugar_g": 4.82,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173338",
  "state": "Mashed",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "mashed",
    "meals-entrees-and-side-dishes",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
