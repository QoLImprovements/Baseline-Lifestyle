/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710601",
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
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    }
  ],
  "name": "Fruit juice drink, added calcium (Sunny D)",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 13.2,
    "energy_kcal": 53.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 5.0,
    "iron_mg": 0.05,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 83.0,
    "protein_g": 0.0,
    "salt_g": 0.135,
    "sat_fat_g": 0.0,
    "sodium_mg": 54.0,
    "sugar_g": 8.02,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710601",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "beverages",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
