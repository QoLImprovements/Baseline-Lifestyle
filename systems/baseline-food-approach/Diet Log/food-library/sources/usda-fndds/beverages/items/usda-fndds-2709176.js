/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-no-ice",
  "description": "Citrus juice",
  "id": "usda-fndds-2709176",
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
      "gramsPerUnit": 196.0,
      "key": "juice-of-1-grapefruit",
      "kind": "unit",
      "label": "Juice of 1 grapefruit"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grapefruit juice, 100%, freshly squeezed",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 9.2,
    "energy_kcal": 39.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.2,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 162.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.014,
    "sodium_mg": 1.0,
    "sugar_g": 9.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709176",
  "state": "Unspecified",
  "subcategory": "Citrus juice",
  "tags": [
    "beverages",
    "citrus-juice",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
