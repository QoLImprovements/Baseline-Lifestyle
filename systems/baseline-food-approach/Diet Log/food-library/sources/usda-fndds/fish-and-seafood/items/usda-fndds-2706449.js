/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Shellfish",
  "id": "usda-fndds-2706449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-shrimp-with-sauce",
      "kind": "unit",
      "label": "1 shrimp with sauce"
    }
  ],
  "name": "Shrimp cocktail",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 7.92,
    "energy_kcal": 99.0,
    "fat_g": 1.22,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.41,
    "magnesium_mg": 25.0,
    "omega3_g": 0.136,
    "phosphorus_mg": 239.0,
    "potassium_mg": 184.0,
    "protein_g": 13.2,
    "salt_g": 1.255,
    "sat_fat_g": 0.247,
    "sodium_mg": 502.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706449",
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
