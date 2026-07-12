/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Burrito bowl, chicken, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 6.94,
    "energy_kcal": 135.0,
    "fat_g": 5.87,
    "fibre_g": 1.8,
    "folate_ug": 16.0,
    "iron_mg": 0.98,
    "magnesium_mg": 29.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 159.0,
    "potassium_mg": 267.0,
    "protein_g": 13.6,
    "salt_g": 0.8625,
    "sat_fat_g": 2.43,
    "sodium_mg": 345.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708562",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
