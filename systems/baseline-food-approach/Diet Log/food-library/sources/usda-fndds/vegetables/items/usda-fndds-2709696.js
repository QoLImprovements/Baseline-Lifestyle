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
  "id": "usda-fndds-2709696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Squash, winter, souffle",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 12.1,
    "energy_kcal": 78.0,
    "fat_g": 2.26,
    "fibre_g": 2.1,
    "folate_ug": 27.0,
    "iron_mg": 0.79,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 216.0,
    "protein_g": 3.4,
    "salt_g": 0.41,
    "sat_fat_g": 0.747,
    "sodium_mg": 164.0,
    "sugar_g": 5.77,
    "vitamin_a_ug": 225.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709696",
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
