/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dried fruits",
  "id": "usda-fndds-2709200",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Banana chips",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 58.4,
    "energy_kcal": 519.0,
    "fat_g": 33.6,
    "fibre_g": 7.7,
    "folate_ug": 14.0,
    "iron_mg": 1.25,
    "magnesium_mg": 76.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 536.0,
    "protein_g": 2.3,
    "salt_g": 0.015,
    "sat_fat_g": 29.0,
    "sodium_mg": 6.0,
    "sugar_g": 35.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709200",
  "state": "Unspecified",
  "subcategory": "Dried fruits",
  "tags": [
    "dried-fruits",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
