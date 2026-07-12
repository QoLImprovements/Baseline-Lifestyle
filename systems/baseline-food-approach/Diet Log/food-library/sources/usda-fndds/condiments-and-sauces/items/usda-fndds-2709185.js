/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709185",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
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
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 0.9,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 0.1,
      "key": "1-drop",
      "kind": "unit",
      "label": "1 drop"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Lime juice, 100%, canned or bottled",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.69,
    "energy_kcal": 21.0,
    "fat_g": 0.23,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 75.0,
    "protein_g": 0.25,
    "salt_g": 0.04,
    "sat_fat_g": 0.026,
    "sodium_mg": 16.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709185",
  "state": "Canned",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "mustard-and-other-condiments"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
