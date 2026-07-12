/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Squash, summer, casserole with tomato and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 8.87,
    "energy_kcal": 85.0,
    "fat_g": 4.32,
    "fibre_g": 1.4,
    "folate_ug": 24.0,
    "iron_mg": 0.84,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 82.0,
    "potassium_mg": 264.0,
    "protein_g": 3.48,
    "salt_g": 0.57,
    "sat_fat_g": 2.23,
    "sodium_mg": 228.0,
    "sugar_g": 3.31,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 13.8,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710059",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
