/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Citrus juice",
  "id": "usda-fndds-2709179",
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
  "name": "Grapefruit juice, 100%, with calcium added",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 7.74,
    "energy_kcal": 39.0,
    "fat_g": 0.68,
    "fibre_g": 0.3,
    "folate_ug": 12.0,
    "iron_mg": 0.06,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 132.0,
    "protein_g": 0.51,
    "salt_g": 0.005,
    "sat_fat_g": 0.173,
    "sodium_mg": 2.0,
    "sugar_g": 7.96,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 22.2,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709179",
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
