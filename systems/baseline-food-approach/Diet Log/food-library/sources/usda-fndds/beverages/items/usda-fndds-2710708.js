/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-20-fl-oz",
  "description": "Bottled water",
  "id": "usda-fndds-2710708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-bottle-20-fl-oz",
      "kind": "unit",
      "label": "1 bottle (20 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-bottle-8-fl-oz",
      "kind": "unit",
      "label": "1 bottle (8 fl oz)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-bottle-16-9-fl-oz-or-500-ml",
      "kind": "unit",
      "label": "1 bottle (16.9 fl oz or 500 ml)"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-bottle-nfs",
      "kind": "unit",
      "label": "1 bottle, NFS"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 1014.0,
      "key": "1-bottle-1-liter",
      "kind": "unit",
      "label": "1 bottle (1 liter)"
    }
  ],
  "name": "Water, bottled, plain",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710708",
  "state": "Unspecified",
  "subcategory": "Bottled water",
  "tags": [
    "beverages",
    "bottled-water",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
