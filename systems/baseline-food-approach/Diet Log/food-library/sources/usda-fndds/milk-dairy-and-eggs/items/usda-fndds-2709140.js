/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2709140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-meal-10-oz",
      "kind": "unit",
      "label": "1 meal (10 oz)"
    }
  ],
  "name": "Noodles with vegetables in tomato-based sauce, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 10.8,
    "energy_kcal": 70.0,
    "fat_g": 1.55,
    "fibre_g": 1.7,
    "folate_ug": 28.0,
    "iron_mg": 0.87,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 76.0,
    "potassium_mg": 280.0,
    "protein_g": 3.63,
    "salt_g": 0.335,
    "sat_fat_g": 0.667,
    "sodium_mg": 134.0,
    "sugar_g": 2.71,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 8.3,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709140",
  "state": "Frozen",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
