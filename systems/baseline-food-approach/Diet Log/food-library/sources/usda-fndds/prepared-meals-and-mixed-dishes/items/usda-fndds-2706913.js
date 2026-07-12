/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-double-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double cheeseburger (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 16.9,
    "energy_kcal": 278.0,
    "fat_g": 15.7,
    "fibre_g": 0.7,
    "folate_ug": 40.0,
    "iron_mg": 2.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 221.0,
    "potassium_mg": 224.0,
    "protein_g": 16.3,
    "salt_g": 1.255,
    "sat_fat_g": 6.88,
    "sodium_mg": 502.0,
    "sugar_g": 3.62,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706913",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
