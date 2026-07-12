/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172113",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Ravioli, cheese with tomato sauce, frozen, not prepared, includes regular and light entrees",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 17.3,
    "energy_kcal": 464.0,
    "fat_g": 2.61,
    "fibre_g": 1.4,
    "folate_ug": 47.0,
    "iron_mg": 0.93,
    "magnesium_mg": 20.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 78.0,
    "potassium_mg": 233.0,
    "protein_g": 4.52,
    "salt_g": 0.7,
    "sat_fat_g": 1.19,
    "sodium_mg": 280.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172113",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
