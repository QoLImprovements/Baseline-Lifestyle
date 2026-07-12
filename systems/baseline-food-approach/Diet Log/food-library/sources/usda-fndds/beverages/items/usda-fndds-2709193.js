/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Citrus juice",
  "id": "usda-fndds-2709193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
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
    }
  ],
  "name": "Tangerine juice, 100%",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 10.1,
    "energy_kcal": 43.0,
    "fat_g": 0.2,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 0.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 178.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.024,
    "sodium_mg": 1.0,
    "sugar_g": 9.9,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 29.4,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709193",
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
