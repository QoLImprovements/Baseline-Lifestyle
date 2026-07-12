/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-kool-aid-jammers-pouch",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "1-kool-aid-jammers-pouch",
      "kind": "unit",
      "label": "1 Kool-Aid Jammers pouch"
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
      "gramsPerUnit": 1023.0,
      "key": "1-extra-large-drink",
      "kind": "unit",
      "label": "1 extra large drink"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-juice-box-pouch-6-75-fl-oz",
      "kind": "unit",
      "label": "1 juice box/pouch (6.75 fl oz)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small-drink",
      "kind": "unit",
      "label": "1 small drink"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "1-child-senior-drink",
      "kind": "unit",
      "label": "1 child/senior drink"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "1-fun-size-box-4-23-fl-oz",
      "kind": "unit",
      "label": "1 fun size box (4.23 fl oz)"
    },
    {
      "gramsPerUnit": 512.0,
      "key": "1-medium-drink",
      "kind": "unit",
      "label": "1 medium drink"
    }
  ],
  "name": "Fruit juice drink, with high vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 11.4,
    "energy_kcal": 46.0,
    "fat_g": 0.11,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.25,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 122.0,
    "protein_g": 0.13,
    "salt_g": 0.02,
    "sat_fat_g": 0.017,
    "sodium_mg": 8.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710580",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "beverages",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
