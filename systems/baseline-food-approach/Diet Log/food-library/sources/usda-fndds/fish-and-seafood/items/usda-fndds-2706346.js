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
  "id": "usda-fndds-2706346",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-crab",
      "kind": "unit",
      "label": "1 crab"
    }
  ],
  "name": "Crab, soft shell",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 11.7,
    "energy_kcal": 227.0,
    "fat_g": 12.7,
    "fibre_g": 0.5,
    "folate_ug": 53.0,
    "iron_mg": 1.27,
    "magnesium_mg": 32.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 201.0,
    "potassium_mg": 221.0,
    "protein_g": 15.5,
    "salt_g": 1.6075,
    "sat_fat_g": 1.82,
    "sodium_mg": 643.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.64,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706346",
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
