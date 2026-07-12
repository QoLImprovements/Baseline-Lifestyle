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
  "id": "usda-sr-legacy-173295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 895.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, pepperoni topping, regular crust",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 32.0,
    "energy_kcal": 1180.0,
    "fat_g": 11.9,
    "fibre_g": 2.3,
    "folate_ug": 92.0,
    "iron_mg": 2.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.196,
    "phosphorus_mg": 198.0,
    "potassium_mg": 195.0,
    "protein_g": 11.7,
    "salt_g": 1.7125,
    "sat_fat_g": 5.09,
    "sodium_mg": 685.0,
    "sugar_g": 3.26,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173295",
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
