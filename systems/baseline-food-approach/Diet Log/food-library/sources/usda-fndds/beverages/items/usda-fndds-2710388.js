/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup-8-fl-oz",
  "description": "Coffee",
  "id": "usda-fndds-2710388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-8-fl-oz",
      "kind": "unit",
      "label": "1 cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee, Latte, with non-dairy milk",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 2.81,
    "energy_kcal": 28.0,
    "fat_g": 1.36,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 63.0,
    "protein_g": 0.97,
    "salt_g": 0.11,
    "sat_fat_g": 0.148,
    "sodium_mg": 44.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710388",
  "state": "Unspecified",
  "subcategory": "Coffee",
  "tags": [
    "beverages",
    "coffee",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
