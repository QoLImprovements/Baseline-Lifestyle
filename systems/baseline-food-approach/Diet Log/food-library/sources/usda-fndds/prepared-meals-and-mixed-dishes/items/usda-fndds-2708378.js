/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-cup-cooked",
  "description": "Oatmeal",
  "id": "usda-fndds-2708378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    }
  ],
  "name": "Oatmeal, fast food, plain",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 11.9,
    "energy_kcal": 80.0,
    "fat_g": 2.54,
    "fibre_g": 1.7,
    "folate_ug": 4.0,
    "iron_mg": 0.68,
    "magnesium_mg": 25.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 77.0,
    "potassium_mg": 74.0,
    "protein_g": 2.6,
    "salt_g": 0.2325,
    "sat_fat_g": 1.07,
    "sodium_mg": 93.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708378",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "oatmeal",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
