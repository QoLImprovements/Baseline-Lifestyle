/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Fruit drinks",
  "id": "usda-fndds-2709344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Guava nectar",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 13.3,
    "energy_kcal": 48.0,
    "fat_g": 0.07,
    "fibre_g": 1.2,
    "folate_ug": 4.0,
    "iron_mg": 0.54,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 33.0,
    "protein_g": 0.3,
    "salt_g": 0.015,
    "sat_fat_g": 0.023,
    "sodium_mg": 6.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 21.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709344",
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
