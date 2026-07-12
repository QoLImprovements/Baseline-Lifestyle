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
  "id": "usda-fndds-2706842",
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
  "name": "Shrimp garden salad, shrimp, lettuce, eggs, vegetables excluding tomato and carrots, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 2.39,
    "energy_kcal": 67.0,
    "fat_g": 2.14,
    "fibre_g": 0.7,
    "folate_ug": 32.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.189,
    "phosphorus_mg": 102.0,
    "potassium_mg": 192.0,
    "protein_g": 8.8,
    "salt_g": 0.7575,
    "sat_fat_g": 0.579,
    "sodium_mg": 303.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 52.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706842",
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
