/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Citrus juice",
  "id": "usda-fndds-2709178",
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
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grapefruit juice, 100%, canned, bottled or in a carton",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.35,
    "energy_kcal": 40.0,
    "fat_g": 0.48,
    "fibre_g": 0.2,
    "folate_ug": 16.0,
    "iron_mg": 0.04,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 134.0,
    "protein_g": 0.56,
    "salt_g": 0.0025,
    "sat_fat_g": 0.082,
    "sodium_mg": 1.0,
    "sugar_g": 7.42,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 31.8,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709178",
  "state": "Canned",
  "subcategory": "Citrus juice",
  "tags": [
    "beverages",
    "canned",
    "citrus-juice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
