/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-small-drink",
  "description": "Soft drinks",
  "id": "usda-fndds-2710551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small-drink",
      "kind": "unit",
      "label": "1 small drink"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-can-12-fl-oz",
      "kind": "unit",
      "label": "1 can (12 fl oz)"
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
    },
    {
      "gramsPerUnit": 620.0,
      "key": "1-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 bottle (20 fl oz)"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 744.0,
      "key": "1-large-drink",
      "kind": "unit",
      "label": "1 large drink"
    },
    {
      "gramsPerUnit": 512.0,
      "key": "1-medium-drink",
      "kind": "unit",
      "label": "1 medium drink"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "1-child-senior-drink",
      "kind": "unit",
      "label": "1 child/senior drink"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 1023.0,
      "key": "1-extra-large-drink",
      "kind": "unit",
      "label": "1 extra large drink"
    }
  ],
  "name": "Soft drink, fruit flavored, caffeine free",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 10.1,
    "energy_kcal": 40.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.11,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 1.0,
    "protein_g": 0.05,
    "salt_g": 0.0225,
    "sat_fat_g": 0.0,
    "sodium_mg": 9.0,
    "sugar_g": 8.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710551",
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
