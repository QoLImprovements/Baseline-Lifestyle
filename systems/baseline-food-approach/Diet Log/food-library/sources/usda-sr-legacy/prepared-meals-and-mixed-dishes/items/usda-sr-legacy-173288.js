/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 938.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "LITTLE CAESARS 14\" Pepperoni Pizza, Large Deep Dish Crust",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 29.0,
    "energy_kcal": 1110.0,
    "fat_g": 10.8,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.177,
    "phosphorus_mg": 215.0,
    "potassium_mg": 173.0,
    "protein_g": 12.9,
    "salt_g": 1.23,
    "sat_fat_g": 4.31,
    "sodium_mg": 492.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173288",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
