/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pizza-12-diameter",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 532.0,
      "key": "pizza-12-diameter",
      "kind": "unit",
      "label": "pizza 12\" diameter"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "0-25-pizza-12-diameter",
      "kind": "unit",
      "label": "0.25 pizza 12\" diameter"
    }
  ],
  "name": "Pizza, pepperoni topping, regular crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 24.7,
    "energy_kcal": 274.0,
    "fat_g": 13.1,
    "fibre_g": 2.0,
    "folate_ug": 75.0,
    "iron_mg": 2.43,
    "magnesium_mg": 27.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 196.0,
    "potassium_mg": 239.0,
    "protein_g": 14.4,
    "salt_g": 1.475,
    "sat_fat_g": 4.83,
    "sodium_mg": 590.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172096",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
