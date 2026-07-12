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
  "id": "usda-fndds-2707055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spam sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 27.6,
    "energy_kcal": 266.0,
    "fat_g": 12.8,
    "fibre_g": 1.1,
    "folate_ug": 52.0,
    "iron_mg": 1.83,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 118.0,
    "potassium_mg": 261.0,
    "protein_g": 10.0,
    "salt_g": 2.2825,
    "sat_fat_g": 4.58,
    "sodium_mg": 913.0,
    "sugar_g": 5.13,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707055",
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
