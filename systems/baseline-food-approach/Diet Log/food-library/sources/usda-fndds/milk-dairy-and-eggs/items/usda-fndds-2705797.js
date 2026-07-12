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
  "id": "usda-fndds-2705797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese sandwich, cheddar cheese, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 415.0,
    "carbs_g": 30.0,
    "energy_kcal": 325.0,
    "fat_g": 16.1,
    "fibre_g": 1.4,
    "folate_ug": 74.0,
    "iron_mg": 2.04,
    "magnesium_mg": 27.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 255.0,
    "potassium_mg": 101.0,
    "protein_g": 15.1,
    "salt_g": 1.335,
    "sat_fat_g": 8.39,
    "sodium_mg": 534.0,
    "sugar_g": 3.28,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705797",
  "state": "Unspecified",
  "subcategory": "Cheese sandwiches",
  "tags": [
    "cheese-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
