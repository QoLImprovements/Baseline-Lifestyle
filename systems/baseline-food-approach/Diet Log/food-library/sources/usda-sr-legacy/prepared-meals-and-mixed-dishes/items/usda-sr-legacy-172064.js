/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "item-9-5-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "item-9-5-oz",
      "kind": "unit",
      "label": "item 9.5 oz"
    }
  ],
  "name": "McDONALD'S, BIG BREAKFAST",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 17.5,
    "energy_kcal": 1190.0,
    "fat_g": 19.4,
    "fibre_g": 1.1,
    "folate_ug": 0.0,
    "iron_mg": 1.74,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 256.0,
    "potassium_mg": 207.0,
    "protein_g": 10.2,
    "salt_g": 1.3725,
    "sat_fat_g": 6.4,
    "sodium_mg": 549.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172064",
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
