/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-individual-school-container",
  "description": "Other fruit juice",
  "id": "usda-fndds-2709315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-juice-box-pouch-6-75-fl-oz",
      "kind": "unit",
      "label": "1 juice box/pouch (6.75 fl oz)"
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
      "gramsPerUnit": 131.0,
      "key": "1-fun-size-box-4-23-fl-oz",
      "kind": "unit",
      "label": "1 fun size box (4.23 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Fruit juice, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.1,
    "energy_kcal": 51.0,
    "fat_g": 0.26,
    "fibre_g": 0.2,
    "folate_ug": 9.0,
    "iron_mg": 0.08,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 104.0,
    "protein_g": 0.29,
    "salt_g": 0.0125,
    "sat_fat_g": 0.02,
    "sodium_mg": 5.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 34.7,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709315",
  "state": "Unspecified",
  "subcategory": "Other fruit juice",
  "tags": [
    "beverages",
    "other-fruit-juice",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
