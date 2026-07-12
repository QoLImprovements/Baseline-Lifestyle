/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "juice-of-1-orange-2-5-8-dia",
  "description": "Citrus juice",
  "id": "usda-fndds-2709187",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "juice-of-1-orange-2-5-8-dia",
      "kind": "unit",
      "label": "Juice of 1 orange (2-5/8\" dia)"
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
  "name": "Orange juice, 100%, freshly squeezed",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 10.0,
    "energy_kcal": 47.0,
    "fat_g": 0.36,
    "fibre_g": 0.3,
    "folate_ug": 29.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 183.0,
    "protein_g": 0.81,
    "salt_g": 0.0,
    "sat_fat_g": 0.014,
    "sodium_mg": 0.0,
    "sugar_g": 8.08,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 30.5,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709187",
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
