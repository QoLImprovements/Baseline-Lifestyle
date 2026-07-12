/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    }
  ],
  "name": "Shrimp garden salad, shrimp, lettuce, eggs, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 2.77,
    "energy_kcal": 65.0,
    "fat_g": 2.04,
    "fibre_g": 0.8,
    "folate_ug": 31.0,
    "iron_mg": 0.96,
    "magnesium_mg": 22.0,
    "omega3_g": 0.178,
    "phosphorus_mg": 96.0,
    "potassium_mg": 196.0,
    "protein_g": 8.28,
    "salt_g": 0.7225,
    "sat_fat_g": 0.545,
    "sodium_mg": 289.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 158.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 50.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706841",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
