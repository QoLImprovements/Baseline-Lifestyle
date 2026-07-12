/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    }
  ],
  "name": "Fish, surimi",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.85,
    "energy_kcal": 414.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.26,
    "magnesium_mg": 43.0,
    "omega3_g": 0.412,
    "phosphorus_mg": 282.0,
    "potassium_mg": 112.0,
    "protein_g": 15.2,
    "salt_g": 0.3575,
    "sat_fat_g": 0.191,
    "sodium_mg": 143.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173702",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
