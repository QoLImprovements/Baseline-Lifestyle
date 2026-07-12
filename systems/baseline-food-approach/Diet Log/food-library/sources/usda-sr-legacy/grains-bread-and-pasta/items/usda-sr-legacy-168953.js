/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "package",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Pasta mix, classic cheeseburger macaroni, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 71.5,
    "energy_kcal": 349.0,
    "fat_g": 1.88,
    "fibre_g": 2.7,
    "folate_ug": 122.0,
    "iron_mg": 2.75,
    "magnesium_mg": 35.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 131.0,
    "potassium_mg": 204.0,
    "protein_g": 11.6,
    "salt_g": 5.375,
    "sat_fat_g": 0.368,
    "sodium_mg": 2150.0,
    "sugar_g": 4.97,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168953",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "grains-bread-and-pasta",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
