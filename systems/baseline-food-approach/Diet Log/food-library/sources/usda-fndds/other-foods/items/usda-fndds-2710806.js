/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710806",
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
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    }
  ],
  "name": "Dark green vegetables as ingredient in omelet",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 4.51,
    "energy_kcal": 35.0,
    "fat_g": 0.56,
    "fibre_g": 1.9,
    "folate_ug": 81.0,
    "iron_mg": 1.01,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 452.0,
    "protein_g": 2.97,
    "salt_g": 0.235,
    "sat_fat_g": 0.066,
    "sodium_mg": 94.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 242.0,
    "vitamin_c_mg": 34.9,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 414.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710806",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "not-included-in-a-food-category",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
