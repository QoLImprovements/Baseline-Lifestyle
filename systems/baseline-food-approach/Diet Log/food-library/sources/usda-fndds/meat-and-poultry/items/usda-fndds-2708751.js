/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-can-15-oz",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-can-15-oz",
      "kind": "unit",
      "label": "1 can (15 oz)"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lasagna with meat, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 13.3,
    "energy_kcal": 97.0,
    "fat_g": 3.41,
    "fibre_g": 1.5,
    "folate_ug": 21.0,
    "iron_mg": 1.09,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 40.0,
    "potassium_mg": 178.0,
    "protein_g": 3.24,
    "salt_g": 0.7075,
    "sat_fat_g": 1.46,
    "sodium_mg": 283.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708751",
  "state": "Canned",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "canned",
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
