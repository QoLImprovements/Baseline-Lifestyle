/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "topping-from-1-piece",
  "description": "Pizza",
  "id": "usda-fndds-2705787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "topping-from-1-piece",
      "kind": "unit",
      "label": "Topping from 1 piece"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "topping-per-surface-inch-of-pizza",
      "kind": "unit",
      "label": "Topping per surface inch of pizza"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Topping from cheese pizza",
  "nutritionPerBasis": {
    "calcium_mg": 485.0,
    "carbs_g": 7.62,
    "energy_kcal": 230.0,
    "fat_g": 14.7,
    "fibre_g": 1.0,
    "folate_ug": 21.0,
    "iron_mg": 0.58,
    "magnesium_mg": 29.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 381.0,
    "potassium_mg": 261.0,
    "protein_g": 16.9,
    "salt_g": 1.7825,
    "sat_fat_g": 8.02,
    "sodium_mg": 713.0,
    "sugar_g": 4.38,
    "vitamin_a_ug": 156.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705787",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "milk-dairy-and-eggs",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
