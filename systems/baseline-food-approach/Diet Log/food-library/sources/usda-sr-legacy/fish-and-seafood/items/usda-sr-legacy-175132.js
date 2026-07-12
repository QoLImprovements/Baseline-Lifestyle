/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "tbsp",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "can-8-oz-solids-and-liquid",
      "kind": "unit",
      "label": "can (8 oz), solids and liquid"
    }
  ],
  "name": "Fish, roe, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 1.5,
    "energy_kcal": 143.0,
    "fat_g": 6.42,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 0.6,
    "magnesium_mg": 20.0,
    "omega3_g": 2.425,
    "phosphorus_mg": 402.0,
    "potassium_mg": 221.0,
    "protein_g": 22.3,
    "salt_g": 0.2275,
    "sat_fat_g": 1.46,
    "sodium_mg": 91.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 7.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175132",
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
