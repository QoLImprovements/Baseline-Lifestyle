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
  "id": "usda-sr-legacy-173342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "container-mean-weight-over-brands",
      "kind": "unit",
      "label": "container (mean weight over brands)"
    }
  ],
  "name": "Macaroni and cheese, frozen entree",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 17.3,
    "energy_kcal": 624.0,
    "fat_g": 6.41,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.57,
    "magnesium_mg": 17.0,
    "omega3_g": 0.151,
    "phosphorus_mg": 119.0,
    "potassium_mg": 95.0,
    "protein_g": 5.6,
    "salt_g": 0.725,
    "sat_fat_g": 2.61,
    "sodium_mg": 290.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173342",
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
