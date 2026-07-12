/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "small",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Mollusks, mussel, blue, raw",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 3.69,
    "energy_kcal": 360.0,
    "fat_g": 2.24,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 3.95,
    "magnesium_mg": 34.0,
    "omega3_g": 0.463,
    "phosphorus_mg": 197.0,
    "potassium_mg": 320.0,
    "protein_g": 11.9,
    "salt_g": 0.715,
    "sat_fat_g": 0.425,
    "sodium_mg": 286.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174216",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
