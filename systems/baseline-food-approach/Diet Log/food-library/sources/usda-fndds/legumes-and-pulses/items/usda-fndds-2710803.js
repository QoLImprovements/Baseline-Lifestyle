/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710803",
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
  "name": "Green beans, cooked, as ingredient",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.72,
    "energy_kcal": 42.0,
    "fat_g": 0.29,
    "fibre_g": 3.1,
    "folate_ug": 29.0,
    "iron_mg": 0.68,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 302.0,
    "protein_g": 2.05,
    "salt_g": 0.0,
    "sat_fat_g": 0.052,
    "sodium_mg": 0.0,
    "sugar_g": 2.43,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 45.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710803",
  "state": "Cooked",
  "subcategory": "Not included in a food category",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "not-included-in-a-food-category"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
