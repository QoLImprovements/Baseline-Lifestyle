/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709181",
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
      "gramsPerUnit": 8.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.85,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
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
      "gramsPerUnit": 0.1,
      "key": "1-drop",
      "kind": "unit",
      "label": "1 drop"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "juice-of-1-lemon-2-1-8-dia",
      "kind": "unit",
      "label": "Juice of 1 lemon (2-1/8\" dia)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "juice-of-1-wedge-or-slice",
      "kind": "unit",
      "label": "Juice of 1 wedge or slice"
    }
  ],
  "name": "Lemon juice, 100%, freshly squeezed",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.9,
    "energy_kcal": 22.0,
    "fat_g": 0.24,
    "fibre_g": 0.3,
    "folate_ug": 20.0,
    "iron_mg": 0.08,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 103.0,
    "protein_g": 0.35,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 2.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 38.7,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709181",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
