/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-mussel",
  "description": "Shellfish",
  "id": "usda-fndds-2706350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-mussel",
      "kind": "unit",
      "label": "1 mussel"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mussels",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 4.67,
    "energy_kcal": 109.0,
    "fat_g": 2.84,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 5.0,
    "magnesium_mg": 43.0,
    "omega3_g": 0.586,
    "phosphorus_mg": 249.0,
    "potassium_mg": 405.0,
    "protein_g": 15.1,
    "salt_g": 0.905,
    "sat_fat_g": 0.538,
    "sodium_mg": 362.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706350",
  "state": "Unspecified",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
