/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-extra-large-drink",
  "description": "Tea",
  "id": "usda-fndds-2710532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 979.0,
      "key": "1-extra-large-drink",
      "kind": "unit",
      "label": "1 extra large drink"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can-or-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-small-drink",
      "kind": "unit",
      "label": "1 small drink"
    },
    {
      "gramsPerUnit": 720.0,
      "key": "1-large-drink",
      "kind": "unit",
      "label": "1 large drink"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-can-or-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (20 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 495.0,
      "key": "1-medium-drink",
      "kind": "unit",
      "label": "1 medium drink"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-can-or-bottle-16-9-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (16.9 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-child-senior-drink",
      "kind": "unit",
      "label": "1 child/senior drink"
    }
  ],
  "name": "Tea, iced, bottled, black, decaffeinated, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.3,
    "energy_kcal": 1.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.02,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 37.0,
    "protein_g": 0.0,
    "salt_g": 0.0075,
    "sat_fat_g": 0.002,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710532",
  "state": "Unspecified",
  "subcategory": "Tea",
  "tags": [
    "beverages",
    "tea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
