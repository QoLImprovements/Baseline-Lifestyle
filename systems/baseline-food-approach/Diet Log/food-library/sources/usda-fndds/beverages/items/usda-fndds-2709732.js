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
  "id": "usda-fndds-2709732",
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
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
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
    }
  ],
  "name": "Tomato and vegetable juice, 100%, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.59,
    "energy_kcal": 22.0,
    "fat_g": 0.1,
    "fibre_g": 0.8,
    "folate_ug": 21.0,
    "iron_mg": 0.42,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 193.0,
    "protein_g": 0.6,
    "salt_g": 0.145,
    "sat_fat_g": 0.014,
    "sodium_mg": 58.0,
    "sugar_g": 3.28,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 27.7,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709732",
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
