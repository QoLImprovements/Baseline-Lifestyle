/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature-snicker-bar-1-fl-oz",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-miniature-snicker-bar-1-fl-oz",
      "kind": "unit",
      "label": "1 miniature Snicker bar (1 fl oz)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-snickers-bar-2-fl-oz",
      "kind": "unit",
      "label": "1 Snickers bar (2 fl oz)"
    }
  ],
  "name": "Ice cream candy bar",
  "nutritionPerBasis": {
    "calcium_mg": 252.0,
    "carbs_g": 30.9,
    "energy_kcal": 323.0,
    "fat_g": 20.2,
    "fibre_g": 0.6,
    "folate_ug": 11.0,
    "iron_mg": 0.72,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 238.0,
    "protein_g": 4.4,
    "salt_g": 0.23,
    "sat_fat_g": 12.7,
    "sodium_mg": 92.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705640",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
