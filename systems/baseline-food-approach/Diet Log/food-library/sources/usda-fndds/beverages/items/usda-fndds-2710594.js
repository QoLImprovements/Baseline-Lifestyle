/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Other diet drinks",
  "id": "usda-fndds-2710594",
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
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-bottle-16-fl-oz",
      "kind": "unit",
      "label": "1 bottle (16 fl oz)"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "1-juice-box-pouch-6-75-fl-oz",
      "kind": "unit",
      "label": "1 juice box/pouch (6.75 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Vegetable and fruit juice drink, with high vitamin C, diet",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.1,
    "energy_kcal": 4.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.3,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 24.0,
    "protein_g": 0.0,
    "salt_g": 0.035,
    "sat_fat_g": 0.0,
    "sodium_mg": 14.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 25.1,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710594",
  "state": "Unspecified",
  "subcategory": "Other diet drinks",
  "tags": [
    "beverages",
    "other-diet-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
