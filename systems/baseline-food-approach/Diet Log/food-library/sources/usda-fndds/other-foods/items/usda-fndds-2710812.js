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
  "id": "usda-fndds-2710812",
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
  "name": "Vegetables as ingredient in stews",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.7,
    "energy_kcal": 59.0,
    "fat_g": 0.3,
    "fibre_g": 2.6,
    "folate_ug": 25.0,
    "iron_mg": 0.46,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 325.0,
    "protein_g": 1.77,
    "salt_g": 0.085,
    "sat_fat_g": 0.04,
    "sodium_mg": 34.0,
    "sugar_g": 3.16,
    "vitamin_a_ug": 259.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710812",
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
