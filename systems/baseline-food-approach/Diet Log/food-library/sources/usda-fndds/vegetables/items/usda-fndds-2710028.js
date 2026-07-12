/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ratatouille",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 5.77,
    "energy_kcal": 67.0,
    "fat_g": 4.73,
    "fibre_g": 1.9,
    "folate_ug": 18.0,
    "iron_mg": 0.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 219.0,
    "protein_g": 1.09,
    "salt_g": 0.3775,
    "sat_fat_g": 0.752,
    "sodium_mg": 151.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 18.7,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710028",
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
