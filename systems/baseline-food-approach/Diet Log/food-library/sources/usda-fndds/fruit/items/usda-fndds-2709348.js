/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fl-oz-no-ice",
  "description": "Fruit drinks",
  "id": "usda-fndds-2709348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Passion fruit nectar",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 17.4,
    "energy_kcal": 69.0,
    "fat_g": 0.06,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 112.0,
    "protein_g": 0.16,
    "salt_g": 0.01,
    "sat_fat_g": 0.002,
    "sodium_mg": 4.0,
    "sugar_g": 17.3,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 11.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709348",
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
