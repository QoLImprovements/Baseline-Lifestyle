/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-sandwich",
  "description": "Cheese sandwiches",
  "id": "usda-fndds-2705805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grilled cheese sandwich, cheddar cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 342.0,
    "carbs_g": 24.4,
    "energy_kcal": 366.0,
    "fat_g": 23.5,
    "fibre_g": 2.8,
    "folate_ug": 39.0,
    "iron_mg": 1.69,
    "magnesium_mg": 39.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 254.0,
    "potassium_mg": 128.0,
    "protein_g": 14.4,
    "salt_g": 1.34,
    "sat_fat_g": 11.2,
    "sodium_mg": 536.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 209.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705805",
  "state": "Grilled",
  "subcategory": "Cheese sandwiches",
  "tags": [
    "cheese-sandwiches",
    "grilled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
