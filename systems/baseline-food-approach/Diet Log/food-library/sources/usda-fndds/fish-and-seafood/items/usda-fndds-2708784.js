/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-shell-jumbo",
      "kind": "unit",
      "label": "1 shell (jumbo)"
    }
  ],
  "name": "Stuffed shells, with fish and/or shellfish, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 16.1,
    "energy_kcal": 116.0,
    "fat_g": 1.94,
    "fibre_g": 1.1,
    "folate_ug": 32.0,
    "iron_mg": 2.04,
    "magnesium_mg": 22.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 103.0,
    "potassium_mg": 222.0,
    "protein_g": 8.85,
    "salt_g": 0.825,
    "sat_fat_g": 0.582,
    "sodium_mg": 330.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708784",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "fish-and-seafood",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
