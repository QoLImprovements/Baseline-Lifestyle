/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "topping-from-1-piece",
  "description": "Pizza",
  "id": "usda-fndds-2705788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "topping-from-1-piece",
      "kind": "unit",
      "label": "Topping from 1 piece"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "topping-per-surface-inch-of-pizza",
      "kind": "unit",
      "label": "Topping per surface inch of pizza"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Topping from vegetable pizza",
  "nutritionPerBasis": {
    "calcium_mg": 455.0,
    "carbs_g": 12.2,
    "energy_kcal": 247.0,
    "fat_g": 15.6,
    "fibre_g": 1.9,
    "folate_ug": 25.0,
    "iron_mg": 2.18,
    "magnesium_mg": 31.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 348.0,
    "potassium_mg": 311.0,
    "protein_g": 15.6,
    "salt_g": 2.0125,
    "sat_fat_g": 7.62,
    "sodium_mg": 805.0,
    "sugar_g": 5.75,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 17.3,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705788",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "pizza",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
