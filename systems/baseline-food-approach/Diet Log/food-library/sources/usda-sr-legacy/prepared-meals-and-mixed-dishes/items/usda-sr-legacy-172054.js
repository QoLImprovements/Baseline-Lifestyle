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
  "id": "usda-sr-legacy-172054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1313.0,
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
  "name": "PIZZA HUT 14\" Super Supreme Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 26.0,
    "energy_kcal": 248.0,
    "fat_g": 11.0,
    "fibre_g": 2.3,
    "folate_ug": 59.0,
    "iron_mg": 1.53,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 208.0,
    "protein_g": 11.3,
    "salt_g": 1.645,
    "sat_fat_g": 4.22,
    "sodium_mg": 658.0,
    "sugar_g": 3.04,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172054",
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
