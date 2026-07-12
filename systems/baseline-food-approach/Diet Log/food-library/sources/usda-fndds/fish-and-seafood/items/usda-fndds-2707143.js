/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, fish or shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.04,
    "energy_kcal": 30.0,
    "fat_g": 0.47,
    "fibre_g": 0.8,
    "folate_ug": 11.0,
    "iron_mg": 0.17,
    "magnesium_mg": 11.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 48.0,
    "potassium_mg": 153.0,
    "protein_g": 2.58,
    "salt_g": 0.6325,
    "sat_fat_g": 0.072,
    "sodium_mg": 253.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707143",
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
