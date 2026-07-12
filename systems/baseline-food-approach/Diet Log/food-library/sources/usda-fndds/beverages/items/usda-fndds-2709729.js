/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Vegetable juice",
  "id": "usda-fndds-2709729",
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
  "name": "Tomato juice, 100%, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.32,
    "energy_kcal": 23.0,
    "fat_g": 0.29,
    "fibre_g": 0.4,
    "folate_ug": 19.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 198.0,
    "protein_g": 0.86,
    "salt_g": 0.145,
    "sat_fat_g": 0.019,
    "sodium_mg": 58.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 49.8,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709729",
  "state": "Unspecified",
  "subcategory": "Vegetable juice",
  "tags": [
    "beverages",
    "unspecified",
    "vegetable-juice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
