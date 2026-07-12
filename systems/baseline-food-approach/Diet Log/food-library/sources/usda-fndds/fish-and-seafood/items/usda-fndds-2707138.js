/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-can",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, Manhattan clam chowder",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.26,
    "energy_kcal": 35.0,
    "fat_g": 0.51,
    "fibre_g": 0.8,
    "folate_ug": 7.0,
    "iron_mg": 0.52,
    "magnesium_mg": 11.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 36.0,
    "potassium_mg": 164.0,
    "protein_g": 2.48,
    "salt_g": 0.6225,
    "sat_fat_g": 0.075,
    "sodium_mg": 249.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707138",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "fish-and-seafood",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
