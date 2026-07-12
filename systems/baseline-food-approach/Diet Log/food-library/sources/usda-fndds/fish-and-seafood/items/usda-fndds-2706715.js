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
  "id": "usda-fndds-2706715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish, noodles, and vegetables including carrots, broccoli, and/or dark green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 14.2,
    "energy_kcal": 137.0,
    "fat_g": 5.22,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 0.94,
    "magnesium_mg": 23.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 123.0,
    "potassium_mg": 120.0,
    "protein_g": 8.35,
    "salt_g": 0.7725,
    "sat_fat_g": 2.42,
    "sodium_mg": 309.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706715",
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
