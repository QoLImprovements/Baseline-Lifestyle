/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-10-fl-oz",
  "description": "Citrus juice",
  "id": "usda-fndds-2709188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "1-bottle-10-fl-oz",
      "kind": "unit",
      "label": "1 bottle (10 fl oz)"
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
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-juice-box-pouch-6-75-fl-oz",
      "kind": "unit",
      "label": "1 juice box/pouch (6.75 fl oz)"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "1-bottle-16-fl-oz",
      "kind": "unit",
      "label": "1 bottle (16 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "1-fun-size-box-4-23-fl-oz",
      "kind": "unit",
      "label": "1 fun size box (4.23 fl oz)"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "1-individual-school-carton",
      "kind": "unit",
      "label": "1 individual school carton"
    }
  ],
  "name": "Orange juice, 100%, canned, bottled or in a carton",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 10.2,
    "energy_kcal": 47.0,
    "fat_g": 0.34,
    "fibre_g": 0.3,
    "folate_ug": 30.0,
    "iron_mg": 0.06,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 182.0,
    "protein_g": 0.77,
    "salt_g": 0.005,
    "sat_fat_g": 0.014,
    "sodium_mg": 2.0,
    "sugar_g": 8.18,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 28.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709188",
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
