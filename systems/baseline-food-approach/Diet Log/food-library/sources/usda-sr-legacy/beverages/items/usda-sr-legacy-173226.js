/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "small-mcdonald-s-shake-12-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173226",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "small-mcdonald-s-shake-12-fl-oz",
      "kind": "unit",
      "label": "small McDonald's shake (12 fl oz)"
    },
    {
      "gramsPerUnit": 333.0,
      "key": "medium-mcdonald-s-shake-16-fl-oz",
      "kind": "unit",
      "label": "medium McDonald's shake (16 fl oz)"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "milkshake-10-fl-oz",
      "kind": "unit",
      "label": "milkshake (10 fl oz)"
    },
    {
      "gramsPerUnit": 20.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 458.0,
      "key": "large-mcdonald-s-shake-22-fl-oz",
      "kind": "unit",
      "label": "large McDonald's shake (22 fl oz)"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Shake, fast food, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 19.6,
    "energy_kcal": 148.0,
    "fat_g": 6.52,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 0.46,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 98.0,
    "potassium_mg": 166.0,
    "protein_g": 3.37,
    "salt_g": 0.2025,
    "sat_fat_g": 3.96,
    "sodium_mg": 81.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173226",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
