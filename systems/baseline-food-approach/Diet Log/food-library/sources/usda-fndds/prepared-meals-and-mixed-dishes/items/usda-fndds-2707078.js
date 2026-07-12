/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    }
  ],
  "name": "Chili hot dog sandwich, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 18.8,
    "energy_kcal": 223.0,
    "fat_g": 12.0,
    "fibre_g": 1.7,
    "folate_ug": 46.0,
    "iron_mg": 2.03,
    "magnesium_mg": 20.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 107.0,
    "potassium_mg": 251.0,
    "protein_g": 9.94,
    "salt_g": 1.39,
    "sat_fat_g": 4.62,
    "sodium_mg": 556.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707078",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
