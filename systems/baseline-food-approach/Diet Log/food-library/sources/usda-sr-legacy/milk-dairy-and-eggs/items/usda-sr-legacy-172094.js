/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-75-cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172094",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "0-75-cup",
      "kind": "unit",
      "label": "0.75 cup"
    }
  ],
  "name": "Tortellini, pasta with cheese filling, fresh-refrigerated, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 47.0,
    "energy_kcal": 1280.0,
    "fat_g": 7.23,
    "fibre_g": 1.9,
    "folate_ug": 74.0,
    "iron_mg": 1.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 212.0,
    "potassium_mg": 89.0,
    "protein_g": 13.5,
    "salt_g": 1.015,
    "sat_fat_g": 3.6,
    "sodium_mg": 406.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172094",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
