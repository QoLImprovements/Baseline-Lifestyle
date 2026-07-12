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
  "id": "usda-fndds-2709136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Vegetable sandwich wrap",
  "nutritionPerBasis": {
    "calcium_mg": 165.0,
    "carbs_g": 19.7,
    "energy_kcal": 160.0,
    "fat_g": 6.55,
    "fibre_g": 1.8,
    "folate_ug": 42.0,
    "iron_mg": 1.68,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 145.0,
    "potassium_mg": 149.0,
    "protein_g": 5.42,
    "salt_g": 1.32,
    "sat_fat_g": 2.97,
    "sodium_mg": 528.0,
    "sugar_g": 3.33,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709136",
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
