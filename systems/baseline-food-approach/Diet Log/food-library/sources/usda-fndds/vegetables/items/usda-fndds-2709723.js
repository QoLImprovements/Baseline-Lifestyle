/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709723",
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
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tomatoes, scalloped",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 14.1,
    "energy_kcal": 110.0,
    "fat_g": 4.97,
    "fibre_g": 1.9,
    "folate_ug": 21.0,
    "iron_mg": 0.89,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 48.0,
    "potassium_mg": 253.0,
    "protein_g": 2.7,
    "salt_g": 0.54,
    "sat_fat_g": 2.46,
    "sodium_mg": 216.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 12.2,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709723",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "unspecified",
    "vegetable-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
