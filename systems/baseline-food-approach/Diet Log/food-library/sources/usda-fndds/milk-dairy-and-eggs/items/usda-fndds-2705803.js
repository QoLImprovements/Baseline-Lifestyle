/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese sandwiches",
  "id": "usda-fndds-2705803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Grilled cheese sandwich, American cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 470.0,
    "carbs_g": 26.1,
    "energy_kcal": 341.0,
    "fat_g": 21.0,
    "fibre_g": 2.8,
    "folate_ug": 37.0,
    "iron_mg": 1.9,
    "magnesium_mg": 40.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 321.0,
    "potassium_mg": 176.0,
    "protein_g": 12.0,
    "salt_g": 2.0425,
    "sat_fat_g": 9.95,
    "sodium_mg": 817.0,
    "sugar_g": 4.44,
    "vitamin_a_ug": 189.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705803",
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
