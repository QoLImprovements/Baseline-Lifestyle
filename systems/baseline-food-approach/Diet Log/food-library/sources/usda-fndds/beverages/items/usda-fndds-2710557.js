/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-large-drink",
  "description": "Soft drinks",
  "id": "usda-fndds-2710557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 744.0,
      "key": "1-large-drink",
      "kind": "unit",
      "label": "1 large drink"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "1-child-senior-drink",
      "kind": "unit",
      "label": "1 child/senior drink"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1023.0,
      "key": "1-extra-large-drink",
      "kind": "unit",
      "label": "1 extra large drink"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 524.0,
      "key": "1-bottle-16-9-fl-oz-or-500-ml",
      "kind": "unit",
      "label": "1 bottle (16.9 fl oz or 500 ml)"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small-drink",
      "kind": "unit",
      "label": "1 small drink"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-can-12-fl-oz",
      "kind": "unit",
      "label": "1 can (12 fl oz)"
    },
    {
      "gramsPerUnit": 620.0,
      "key": "1-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 bottle (20 fl oz)"
    }
  ],
  "name": "Soft drink, root beer",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 10.6,
    "energy_kcal": 41.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 1.0,
    "protein_g": 0.0,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710557",
  "state": "Unspecified",
  "subcategory": "Soft drinks",
  "tags": [
    "beverages",
    "soft-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
