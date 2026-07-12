/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706890",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Cheeseburger (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 23.7,
    "energy_kcal": 265.0,
    "fat_g": 12.3,
    "fibre_g": 1.0,
    "folate_ug": 50.0,
    "iron_mg": 2.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 185.0,
    "potassium_mg": 200.0,
    "protein_g": 14.0,
    "salt_g": 1.3175,
    "sat_fat_g": 5.18,
    "sodium_mg": 527.0,
    "sugar_g": 4.66,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706890",
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
