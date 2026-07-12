/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cubic-inch-cooked",
  "description": "Butter and animal fats",
  "id": "usda-fndds-2705892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch-cooked",
      "kind": "unit",
      "label": "1 cubic inch, cooked"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-slice-4-x-1-3-4-x-1-2",
      "kind": "unit",
      "label": "1 slice (4\" x 1-3/4\" x 1/2\")"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-slice-2-1-4-x-1-3-4-x-1-4",
      "kind": "unit",
      "label": "1 slice (2-1/4\" x 1-3/4\" x 1/4\")"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Fat back, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 750.0,
    "fat_g": 81.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 3.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 41.0,
    "potassium_mg": 47.0,
    "protein_g": 2.68,
    "salt_g": 5.1,
    "sat_fat_g": 31.3,
    "sodium_mg": 2040.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705892",
  "state": "Cooked",
  "subcategory": "Butter and animal fats",
  "tags": [
    "butter-and-animal-fats",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
