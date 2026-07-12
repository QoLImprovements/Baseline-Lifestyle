/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "brownie-2-square",
      "kind": "unit",
      "label": "brownie (2\" square)"
    }
  ],
  "name": "Cookies, brownies, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 50.2,
    "energy_kcal": 1950.0,
    "fat_g": 29.1,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 1.84,
    "magnesium_mg": 53.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 132.0,
    "potassium_mg": 176.0,
    "protein_g": 6.2,
    "salt_g": 0.8575,
    "sat_fat_g": 7.32,
    "sodium_mg": 343.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174949",
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
