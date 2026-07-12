/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-small-drink",
  "description": "Tea",
  "id": "usda-fndds-2710530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-small-drink",
      "kind": "unit",
      "label": "1 small drink"
    },
    {
      "gramsPerUnit": 495.0,
      "key": "1-medium-drink",
      "kind": "unit",
      "label": "1 medium drink"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can-or-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 720.0,
      "key": "1-large-drink",
      "kind": "unit",
      "label": "1 large drink"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-can-or-bottle-16-9-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (16.9 fl oz)"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-can-or-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (20 fl oz)"
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
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-snapple-bottle-16-fl-oz",
      "kind": "unit",
      "label": "1 Snapple bottle (16 fl oz)"
    },
    {
      "gramsPerUnit": 979.0,
      "key": "1-extra-large-drink",
      "kind": "unit",
      "label": "1 extra large drink"
    }
  ],
  "name": "Tea, iced, bottled, black, decaffeinated, diet",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.83,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 27.0,
    "protein_g": 0.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710530",
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
