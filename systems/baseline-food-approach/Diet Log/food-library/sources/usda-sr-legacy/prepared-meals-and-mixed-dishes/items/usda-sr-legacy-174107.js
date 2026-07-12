/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Rolls, dinner, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 53.6,
    "energy_kcal": 1340.0,
    "fat_g": 7.37,
    "fibre_g": 3.1,
    "folate_ug": 91.0,
    "iron_mg": 2.74,
    "magnesium_mg": 24.0,
    "omega3_g": 0.052,
    "phosphorus_mg": 127.0,
    "potassium_mg": 149.0,
    "protein_g": 10.0,
    "salt_g": 0.6325,
    "sat_fat_g": 3.52,
    "sodium_mg": 253.0,
    "sugar_g": 15.4,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174107",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
