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
  "id": "usda-fndds-2709632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Channa Saag",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 8.79,
    "energy_kcal": 89.0,
    "fat_g": 4.33,
    "fibre_g": 3.0,
    "folate_ug": 92.0,
    "iron_mg": 1.58,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 429.0,
    "protein_g": 4.1,
    "salt_g": 0.675,
    "sat_fat_g": 0.553,
    "sodium_mg": 270.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 221.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 364.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709632",
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
