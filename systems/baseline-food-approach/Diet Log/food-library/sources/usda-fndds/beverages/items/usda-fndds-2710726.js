/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-20-fl-oz-monster-milk",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 640.0,
      "key": "1-bottle-20-fl-oz-monster-milk",
      "kind": "unit",
      "label": "1 bottle (20 fl oz) Monster Milk"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 544.0,
      "key": "1-single-serving-box-17-fl-oz-myoplex",
      "kind": "unit",
      "label": "1 single serving box (17 fl oz) Myoplex"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 448.0,
      "key": "1-bottle-14-fl-oz-myoplex",
      "kind": "unit",
      "label": "1 bottle (14 fl oz) Myoplex"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 544.0,
      "key": "1-bottle-or-box-nfs",
      "kind": "unit",
      "label": "1 bottle or box, NFS"
    }
  ],
  "name": "Nutritional drink or shake, high protein, ready-to-drink, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 0.85,
    "energy_kcal": 61.0,
    "fat_g": 3.38,
    "fibre_g": 0.4,
    "folate_ug": 39.0,
    "iron_mg": 0.96,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 179.0,
    "protein_g": 6.59,
    "salt_g": 0.18,
    "sat_fat_g": 0.508,
    "sodium_mg": 72.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 4.58,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710726",
  "state": "Unspecified",
  "subcategory": "Nutritional beverages",
  "tags": [
    "beverages",
    "nutritional-beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
