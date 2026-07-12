/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-no-ice",
  "description": "Tea",
  "id": "usda-fndds-2710513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 bottle (20 fl oz)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    }
  ],
  "name": "Iced Tea / Lemonade juice drink, light",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 6.12,
    "energy_kcal": 21.0,
    "fat_g": 0.04,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.04,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 72.0,
    "protein_g": 0.22,
    "salt_g": 0.0325,
    "sat_fat_g": 0.014,
    "sodium_mg": 13.0,
    "sugar_g": 3.86,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710513",
  "state": "Unspecified",
  "subcategory": "Tea",
  "tags": [
    "beverages",
    "tea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
