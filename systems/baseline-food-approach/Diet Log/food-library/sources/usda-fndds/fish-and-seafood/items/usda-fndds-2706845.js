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
  "id": "usda-fndds-2706845",
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
      "gramsPerUnit": 332.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood garden salad with seafood, lettuce, vegetables excluding tomato and carrots, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 2.62,
    "energy_kcal": 47.0,
    "fat_g": 0.5,
    "fibre_g": 0.8,
    "folate_ug": 37.0,
    "iron_mg": 0.67,
    "magnesium_mg": 25.0,
    "omega3_g": 0.139,
    "phosphorus_mg": 96.0,
    "potassium_mg": 236.0,
    "protein_g": 7.66,
    "salt_g": 0.7,
    "sat_fat_g": 0.095,
    "sodium_mg": 280.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 61.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706845",
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
