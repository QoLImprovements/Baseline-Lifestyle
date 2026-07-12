/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2707088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Multiple meat sandwich wrap",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 19.6,
    "energy_kcal": 226.0,
    "fat_g": 10.1,
    "fibre_g": 1.3,
    "folate_ug": 38.0,
    "iron_mg": 1.82,
    "magnesium_mg": 21.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 274.0,
    "potassium_mg": 282.0,
    "protein_g": 13.4,
    "salt_g": 2.0925,
    "sat_fat_g": 4.23,
    "sodium_mg": 837.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707088",
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
