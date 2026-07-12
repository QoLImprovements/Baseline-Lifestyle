/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Nutrition bar (Slim Fast Original Meal Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 668.0,
    "carbs_g": 60.2,
    "energy_kcal": 386.0,
    "fat_g": 8.92,
    "fibre_g": 5.1,
    "folate_ug": 430.0,
    "iron_mg": 4.98,
    "magnesium_mg": 250.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 673.0,
    "potassium_mg": 289.0,
    "protein_g": 16.2,
    "salt_g": 0.6325,
    "sat_fat_g": 5.36,
    "sodium_mg": 253.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 940.0,
    "vitamin_c_mg": 96.6,
    "vitamin_e_mg": 6.0,
    "vitamin_k_ug": 129.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708121",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
