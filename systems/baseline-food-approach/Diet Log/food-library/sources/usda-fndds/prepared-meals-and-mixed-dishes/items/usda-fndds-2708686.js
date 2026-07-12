/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-cup",
  "description": "Pizza",
  "id": "usda-fndds-2708686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-pizza-bite",
      "kind": "unit",
      "label": "1 pizza bite"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-bagel-bite",
      "kind": "unit",
      "label": "1 Bagel Bite"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-miniature-roll",
      "kind": "unit",
      "label": "1 miniature roll"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-pizza-roll",
      "kind": "unit",
      "label": "1 pizza roll"
    }
  ],
  "name": "Pizza rolls",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 53.4,
    "energy_kcal": 345.0,
    "fat_g": 10.5,
    "fibre_g": 1.3,
    "folate_ug": 34.0,
    "iron_mg": 1.9,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 317.0,
    "protein_g": 9.19,
    "salt_g": 1.5775,
    "sat_fat_g": 2.62,
    "sodium_mg": 631.0,
    "sugar_g": 3.94,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708686",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "pizza",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
