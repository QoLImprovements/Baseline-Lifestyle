/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Ham sandwich wrap",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 22.5,
    "energy_kcal": 230.0,
    "fat_g": 9.38,
    "fibre_g": 1.5,
    "folate_ug": 44.0,
    "iron_mg": 1.9,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 286.0,
    "potassium_mg": 252.0,
    "protein_g": 13.5,
    "salt_g": 2.0625,
    "sat_fat_g": 4.24,
    "sodium_mg": 825.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706970",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
