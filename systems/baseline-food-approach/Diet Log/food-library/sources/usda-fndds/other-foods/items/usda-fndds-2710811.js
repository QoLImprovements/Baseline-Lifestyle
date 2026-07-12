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
  "id": "usda-fndds-2710811",
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
  "name": "Vegetables as ingredient in soups",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 10.6,
    "energy_kcal": 50.0,
    "fat_g": 0.33,
    "fibre_g": 2.0,
    "folate_ug": 26.0,
    "iron_mg": 0.45,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 331.0,
    "protein_g": 1.87,
    "salt_g": 0.0375,
    "sat_fat_g": 0.05,
    "sodium_mg": 15.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 39.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710811",
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
