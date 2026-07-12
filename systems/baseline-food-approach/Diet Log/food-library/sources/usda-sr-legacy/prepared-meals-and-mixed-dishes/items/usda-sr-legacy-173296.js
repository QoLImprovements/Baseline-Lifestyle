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
  "id": "usda-sr-legacy-173296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 946.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, pepperoni topping, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 31.8,
    "energy_kcal": 287.0,
    "fat_g": 12.6,
    "fibre_g": 2.2,
    "folate_ug": 103.0,
    "iron_mg": 2.55,
    "magnesium_mg": 23.0,
    "omega3_g": 0.307,
    "phosphorus_mg": 195.0,
    "potassium_mg": 189.0,
    "protein_g": 11.5,
    "salt_g": 1.71,
    "sat_fat_g": 4.84,
    "sodium_mg": 684.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173296",
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
