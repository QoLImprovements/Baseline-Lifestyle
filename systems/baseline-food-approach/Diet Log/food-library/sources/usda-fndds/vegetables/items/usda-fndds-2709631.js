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
  "id": "usda-fndds-2709631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Palak Paneer",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 4.28,
    "energy_kcal": 101.0,
    "fat_g": 7.02,
    "fibre_g": 0.9,
    "folate_ug": 32.0,
    "iron_mg": 0.55,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 244.0,
    "protein_g": 5.42,
    "salt_g": 0.605,
    "sat_fat_g": 1.81,
    "sodium_mg": 242.0,
    "sugar_g": 1.89,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 177.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709631",
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
