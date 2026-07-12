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
  "id": "usda-fndds-2707091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey and ham sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 19.6,
    "energy_kcal": 170.0,
    "fat_g": 3.84,
    "fibre_g": 2.2,
    "folate_ug": 31.0,
    "iron_mg": 1.6,
    "magnesium_mg": 35.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 218.0,
    "potassium_mg": 311.0,
    "protein_g": 13.9,
    "salt_g": 1.6975,
    "sat_fat_g": 0.891,
    "sodium_mg": 679.0,
    "sugar_g": 2.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707091",
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
