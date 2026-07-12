/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-tablespoon",
  "description": "Shellfish",
  "id": "usda-fndds-2706452",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood sauce",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 2.51,
    "energy_kcal": 203.0,
    "fat_g": 17.4,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 1.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.065,
    "phosphorus_mg": 153.0,
    "potassium_mg": 274.0,
    "protein_g": 8.53,
    "salt_g": 1.1575,
    "sat_fat_g": 2.73,
    "sodium_mg": 463.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 4.04,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706452",
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
