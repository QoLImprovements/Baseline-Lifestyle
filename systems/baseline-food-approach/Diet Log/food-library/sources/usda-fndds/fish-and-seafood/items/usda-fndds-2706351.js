/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oyster",
  "description": "Shellfish",
  "id": "usda-fndds-2706351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Oysters, raw",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 2.72,
    "energy_kcal": 51.0,
    "fat_g": 1.71,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 4.61,
    "magnesium_mg": 18.0,
    "omega3_g": 0.323,
    "phosphorus_mg": 97.0,
    "potassium_mg": 156.0,
    "protein_g": 5.71,
    "salt_g": 0.2125,
    "sat_fat_g": 0.474,
    "sodium_mg": 85.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706351",
  "state": "Raw",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "raw",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
