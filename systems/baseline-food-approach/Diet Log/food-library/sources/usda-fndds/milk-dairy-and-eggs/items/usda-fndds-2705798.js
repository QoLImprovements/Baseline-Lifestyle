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
  "id": "usda-fndds-2705798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Cheese sandwich, cheddar cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 386.0,
    "carbs_g": 27.7,
    "energy_kcal": 323.0,
    "fat_g": 16.3,
    "fibre_g": 3.2,
    "folate_ug": 51.0,
    "iron_mg": 1.92,
    "magnesium_mg": 44.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 286.0,
    "potassium_mg": 143.0,
    "protein_g": 16.3,
    "salt_g": 1.32,
    "sat_fat_g": 8.33,
    "sodium_mg": 528.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705798",
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
