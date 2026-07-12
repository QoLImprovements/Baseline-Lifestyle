/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-ham-hock",
  "description": "Pork",
  "id": "usda-fndds-2705900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-ham-hock",
      "kind": "unit",
      "label": "1 ham hock"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork, ham hocks",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.09,
    "energy_kcal": 268.0,
    "fat_g": 22.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.71,
    "magnesium_mg": 16.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 221.0,
    "potassium_mg": 257.0,
    "protein_g": 14.6,
    "salt_g": 2.6,
    "sat_fat_g": 8.11,
    "sodium_mg": 1040.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705900",
  "state": "Unspecified",
  "subcategory": "Pork",
  "tags": [
    "meat-and-poultry",
    "pork",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
