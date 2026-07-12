/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Shellfish",
  "id": "usda-fndds-2706337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Abalone",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 7.46,
    "energy_kcal": 177.0,
    "fat_g": 6.12,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 3.97,
    "magnesium_mg": 60.0,
    "omega3_g": 0.112,
    "phosphorus_mg": 236.0,
    "potassium_mg": 310.0,
    "protein_g": 21.2,
    "salt_g": 1.435,
    "sat_fat_g": 0.877,
    "sodium_mg": 574.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 5.95,
    "vitamin_k_ug": 33.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706337",
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
