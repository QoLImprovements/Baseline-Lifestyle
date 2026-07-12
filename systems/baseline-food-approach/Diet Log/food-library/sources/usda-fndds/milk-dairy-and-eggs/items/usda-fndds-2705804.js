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
  "id": "usda-fndds-2705804",
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
  "name": "Grilled cheese sandwich, cheddar cheese, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 367.0,
    "carbs_g": 26.4,
    "energy_kcal": 368.0,
    "fat_g": 23.3,
    "fibre_g": 1.2,
    "folate_ug": 56.0,
    "iron_mg": 1.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 227.0,
    "potassium_mg": 91.0,
    "protein_g": 13.4,
    "salt_g": 1.3525,
    "sat_fat_g": 11.3,
    "sodium_mg": 541.0,
    "sugar_g": 2.92,
    "vitamin_a_ug": 209.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705804",
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
