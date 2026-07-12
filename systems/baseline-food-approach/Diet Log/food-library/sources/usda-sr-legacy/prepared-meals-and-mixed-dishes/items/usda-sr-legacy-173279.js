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
  "id": "usda-sr-legacy-173279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 744.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 12\" Pepperoni Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 31.6,
    "energy_kcal": 280.0,
    "fat_g": 11.4,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 2.14,
    "magnesium_mg": 23.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 218.0,
    "potassium_mg": 207.0,
    "protein_g": 12.9,
    "salt_g": 2.0025,
    "sat_fat_g": 5.16,
    "sodium_mg": 801.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173279",
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
