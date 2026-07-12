/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Fruit drinks",
  "id": "usda-fndds-2709343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Cantaloupe nectar",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 15.6,
    "energy_kcal": 65.0,
    "fat_g": 0.11,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.16,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 57.0,
    "protein_g": 0.33,
    "salt_g": 0.0325,
    "sat_fat_g": 0.02,
    "sodium_mg": 13.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709343",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "fruit",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
