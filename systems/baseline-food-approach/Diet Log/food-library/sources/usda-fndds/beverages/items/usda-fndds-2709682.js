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
  "id": "usda-fndds-2709682",
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
    }
  ],
  "name": "Beet juice",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 5.91,
    "energy_kcal": 25.0,
    "fat_g": 0.06,
    "fibre_g": 1.1,
    "folate_ug": 26.0,
    "iron_mg": 0.57,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 128.0,
    "protein_g": 0.72,
    "salt_g": 0.0475,
    "sat_fat_g": 0.01,
    "sodium_mg": 19.0,
    "sugar_g": 4.84,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709682",
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
