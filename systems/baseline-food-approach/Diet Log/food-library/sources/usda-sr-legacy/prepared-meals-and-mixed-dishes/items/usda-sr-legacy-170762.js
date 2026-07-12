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
  "id": "usda-sr-legacy-170762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 597.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, pepperoni topping, thin crust",
  "nutritionPerBasis": {
    "calcium_mg": 216.0,
    "carbs_g": 29.0,
    "energy_kcal": 331.0,
    "fat_g": 17.6,
    "fibre_g": 2.3,
    "folate_ug": 92.0,
    "iron_mg": 1.95,
    "magnesium_mg": 25.0,
    "omega3_g": 0.328,
    "phosphorus_mg": 253.0,
    "potassium_mg": 223.0,
    "protein_g": 14.0,
    "salt_g": 2.1875,
    "sat_fat_g": 7.12,
    "sodium_mg": 875.0,
    "sugar_g": 3.22,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170762",
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
