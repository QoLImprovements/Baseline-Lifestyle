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
  "id": "usda-fndds-2705800",
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
  "name": "Cheese sandwich, reduced fat cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 313.0,
    "carbs_g": 31.1,
    "energy_kcal": 254.0,
    "fat_g": 8.14,
    "fibre_g": 3.2,
    "folate_ug": 50.0,
    "iron_mg": 1.94,
    "magnesium_mg": 47.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 439.0,
    "potassium_mg": 247.0,
    "protein_g": 14.0,
    "salt_g": 1.8825,
    "sat_fat_g": 4.07,
    "sodium_mg": 753.0,
    "sugar_g": 6.36,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705800",
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
