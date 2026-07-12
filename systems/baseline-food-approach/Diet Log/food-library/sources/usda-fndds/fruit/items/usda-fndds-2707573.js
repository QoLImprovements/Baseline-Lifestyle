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
  "id": "usda-fndds-2707573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-bottle-nfs",
      "kind": "unit",
      "label": "1 bottle, NFS"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    }
  ],
  "name": "Coconut water, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 9.07,
    "energy_kcal": 37.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 157.0,
    "protein_g": 0.21,
    "salt_g": 0.0625,
    "sat_fat_g": 0.0,
    "sodium_mg": 25.0,
    "sugar_g": 8.78,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707573",
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
