/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 332.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Seafood garden salad with seafood, lettuce, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 3.04,
    "energy_kcal": 47.0,
    "fat_g": 0.49,
    "fibre_g": 1.0,
    "folate_ug": 36.0,
    "iron_mg": 0.64,
    "magnesium_mg": 24.0,
    "omega3_g": 0.129,
    "phosphorus_mg": 90.0,
    "potassium_mg": 237.0,
    "protein_g": 7.12,
    "salt_g": 0.665,
    "sat_fat_g": 0.088,
    "sodium_mg": 266.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 159.0,
    "vitamin_c_mg": 7.6,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 58.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706846",
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
