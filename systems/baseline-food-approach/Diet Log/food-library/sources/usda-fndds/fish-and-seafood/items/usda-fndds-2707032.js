/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish wrap sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 22.6,
    "energy_kcal": 262.0,
    "fat_g": 12.4,
    "fibre_g": 1.4,
    "folate_ug": 50.0,
    "iron_mg": 1.76,
    "magnesium_mg": 24.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 278.0,
    "potassium_mg": 220.0,
    "protein_g": 14.7,
    "salt_g": 1.405,
    "sat_fat_g": 5.1,
    "sodium_mg": 562.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707032",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
