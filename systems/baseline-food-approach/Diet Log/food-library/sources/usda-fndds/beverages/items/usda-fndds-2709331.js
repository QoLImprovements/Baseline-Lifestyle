/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Other fruit juice",
  "id": "usda-fndds-2709331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Prune juice, 100%",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 17.4,
    "energy_kcal": 71.0,
    "fat_g": 0.03,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 1.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 276.0,
    "protein_g": 0.61,
    "salt_g": 0.01,
    "sat_fat_g": 0.003,
    "sodium_mg": 4.0,
    "sugar_g": 16.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709331",
  "state": "Unspecified",
  "subcategory": "Other fruit juice",
  "tags": [
    "beverages",
    "other-fruit-juice",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
