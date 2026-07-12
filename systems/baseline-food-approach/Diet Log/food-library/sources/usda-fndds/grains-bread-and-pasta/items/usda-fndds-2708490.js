/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2708490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, oat bran, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 68.3,
    "energy_kcal": 403.0,
    "fat_g": 10.2,
    "fibre_g": 12.9,
    "folate_ug": 25.0,
    "iron_mg": 12.3,
    "magnesium_mg": 109.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 324.0,
    "potassium_mg": 287.0,
    "protein_g": 10.4,
    "salt_g": 0.5875,
    "sat_fat_g": 2.49,
    "sodium_mg": 235.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708490",
  "state": "Ready-to-eat",
  "subcategory": "Not included in a food category",
  "tags": [
    "grains-bread-and-pasta",
    "not-included-in-a-food-category",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
