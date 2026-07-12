/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-bottle-16-9-fl-oz-or-500-ml",
  "description": "Flavored or carbonated water",
  "id": "usda-fndds-2710538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-bottle-16-9-fl-oz-or-500-ml",
      "kind": "unit",
      "label": "1 bottle (16.9 fl oz or 500 ml)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can-12-fl-oz",
      "kind": "unit",
      "label": "1 can (12 fl oz)"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Water, tonic",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 8.8,
    "energy_kcal": 34.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.01,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.0,
    "sugar_g": 8.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710538",
  "state": "Unspecified",
  "subcategory": "Flavored or carbonated water",
  "tags": [
    "flavored-or-carbonated-water",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
