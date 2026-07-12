/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-small-medium-shrimp",
  "description": "Shellfish",
  "id": "usda-fndds-2706360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-small-medium-shrimp",
      "kind": "unit",
      "label": "1 small/medium shrimp"
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
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-prawn",
      "kind": "unit",
      "label": "1 prawn"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tiny-shrimp",
      "kind": "unit",
      "label": "1 tiny shrimp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-large-jumbo-shrimp",
      "kind": "unit",
      "label": "1 large/jumbo shrimp"
    }
  ],
  "name": "Shrimp, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 4.9,
    "energy_kcal": 146.0,
    "fat_g": 6.67,
    "fibre_g": 0.2,
    "folate_ug": 24.0,
    "iron_mg": 0.53,
    "magnesium_mg": 26.0,
    "omega3_g": 0.157,
    "phosphorus_mg": 273.0,
    "potassium_mg": 131.0,
    "protein_g": 15.5,
    "salt_g": 0.87,
    "sat_fat_g": 1.23,
    "sodium_mg": 348.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706360",
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
