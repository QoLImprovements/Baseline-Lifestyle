/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "burrito",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "burrito",
      "kind": "unit",
      "label": "burrito"
    }
  ],
  "name": "Burrito, bean and cheese, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 34.0,
    "energy_kcal": 221.0,
    "fat_g": 6.3,
    "fibre_g": 3.4,
    "folate_ug": 105.0,
    "iron_mg": 2.51,
    "magnesium_mg": 31.0,
    "omega3_g": 0.447,
    "phosphorus_mg": 117.0,
    "potassium_mg": 210.0,
    "protein_g": 7.07,
    "salt_g": 0.8775,
    "sat_fat_g": 1.34,
    "sodium_mg": 351.0,
    "sugar_g": 3.21,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173336",
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
