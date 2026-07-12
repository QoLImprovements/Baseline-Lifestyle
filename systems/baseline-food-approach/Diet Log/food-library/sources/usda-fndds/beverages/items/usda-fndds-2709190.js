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
  "id": "usda-fndds-2709190",
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
  "name": "Orange juice, 100%, frozen, reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 10.0,
    "energy_kcal": 42.0,
    "fat_g": 0.07,
    "fibre_g": 0.3,
    "folate_ug": 22.0,
    "iron_mg": 0.09,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 180.0,
    "protein_g": 0.68,
    "salt_g": 0.0125,
    "sat_fat_g": 0.017,
    "sodium_mg": 5.0,
    "sugar_g": 8.47,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 41.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709190",
  "state": "Frozen",
  "subcategory": "Citrus juice",
  "tags": [
    "beverages",
    "citrus-juice",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
