/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2709761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Tomato sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 264.0,
    "carbs_g": 26.5,
    "energy_kcal": 201.0,
    "fat_g": 6.8,
    "fibre_g": 1.5,
    "folate_ug": 62.0,
    "iron_mg": 1.81,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 164.0,
    "potassium_mg": 159.0,
    "protein_g": 8.46,
    "salt_g": 1.235,
    "sat_fat_g": 3.24,
    "sodium_mg": 494.0,
    "sugar_g": 3.99,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709761",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "unspecified",
    "vegetable-sandwiches-burgers",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
