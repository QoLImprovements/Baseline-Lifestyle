/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "4-large",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "4-large",
      "kind": "unit",
      "label": "4 large"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, shrimp, mixed species, raw (may contain additives to retain moisture)",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 0.91,
    "energy_kcal": 71.0,
    "fat_g": 1.01,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.21,
    "magnesium_mg": 22.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 244.0,
    "potassium_mg": 113.0,
    "protein_g": 13.6,
    "salt_g": 1.415,
    "sat_fat_g": 0.261,
    "sodium_mg": 566.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174210",
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
