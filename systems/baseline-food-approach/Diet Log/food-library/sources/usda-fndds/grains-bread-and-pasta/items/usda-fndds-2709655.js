/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli casserole with rice",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 15.1,
    "energy_kcal": 107.0,
    "fat_g": 3.6,
    "fibre_g": 1.9,
    "folate_ug": 49.0,
    "iron_mg": 0.91,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 74.0,
    "potassium_mg": 103.0,
    "protein_g": 4.14,
    "salt_g": 0.47,
    "sat_fat_g": 1.66,
    "sodium_mg": 188.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 19.8,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 46.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709655",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
