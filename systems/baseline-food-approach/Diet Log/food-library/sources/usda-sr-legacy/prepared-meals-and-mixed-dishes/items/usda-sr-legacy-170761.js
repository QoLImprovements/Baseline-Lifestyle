/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pie-22-1-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 548.0,
      "key": "pie-22-1-oz",
      "kind": "unit",
      "label": "pie 22.1 oz"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, pepperoni topping, thin crispy crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 28.7,
    "energy_kcal": 283.0,
    "fat_g": 12.9,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 28.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 213.0,
    "potassium_mg": 268.0,
    "protein_g": 13.2,
    "salt_g": 1.6575,
    "sat_fat_g": 4.97,
    "sodium_mg": 663.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170761",
  "state": "Baked",
  "subcategory": "Fast Foods",
  "tags": [
    "baked",
    "fast-foods",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
