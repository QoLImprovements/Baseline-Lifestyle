/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 883.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 14\" Pepperoni Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 32.1,
    "energy_kcal": 291.0,
    "fat_g": 12.6,
    "fibre_g": 2.6,
    "folate_ug": 112.0,
    "iron_mg": 2.71,
    "magnesium_mg": 24.0,
    "omega3_g": 0.192,
    "phosphorus_mg": 206.0,
    "potassium_mg": 207.0,
    "protein_g": 12.2,
    "salt_g": 1.8975,
    "sat_fat_g": 5.4,
    "sodium_mg": 759.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172052",
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
