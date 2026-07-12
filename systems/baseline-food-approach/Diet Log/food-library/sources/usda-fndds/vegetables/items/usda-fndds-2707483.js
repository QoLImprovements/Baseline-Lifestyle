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
  "id": "usda-fndds-2707483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Falafel sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 27.0,
    "energy_kcal": 265.0,
    "fat_g": 14.8,
    "fibre_g": 2.5,
    "folate_ug": 61.0,
    "iron_mg": 1.55,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 191.0,
    "protein_g": 6.22,
    "salt_g": 0.8975,
    "sat_fat_g": 2.1,
    "sodium_mg": 359.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 2.8,
    "vitamin_k_ug": 29.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707483",
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
