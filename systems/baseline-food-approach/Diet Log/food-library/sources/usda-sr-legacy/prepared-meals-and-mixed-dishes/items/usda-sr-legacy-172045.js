/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 984.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Pepperoni Pizza, Ultimate Deep Dish Crust",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 31.9,
    "energy_kcal": 283.0,
    "fat_g": 12.1,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 2.54,
    "magnesium_mg": 24.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 197.0,
    "potassium_mg": 190.0,
    "protein_g": 11.5,
    "salt_g": 1.7325,
    "sat_fat_g": 4.86,
    "sodium_mg": 693.0,
    "sugar_g": 3.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172045",
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
