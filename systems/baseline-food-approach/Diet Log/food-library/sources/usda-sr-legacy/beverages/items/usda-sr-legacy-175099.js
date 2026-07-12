/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-medium-21-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 486.0,
      "key": "serving-medium-21-fl-oz",
      "kind": "unit",
      "label": "serving medium 21 fl oz"
    },
    {
      "gramsPerUnit": 347.0,
      "key": "serving-small-16-fl-oz",
      "kind": "unit",
      "label": "serving small 16 fl oz"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "can-can-12-fl-oz",
      "kind": "unit",
      "label": "can can 12 fl oz"
    },
    {
      "gramsPerUnit": 722.0,
      "key": "serving-large-32-fl-oz",
      "kind": "unit",
      "label": "serving large 32 fl oz"
    },
    {
      "gramsPerUnit": 473.0,
      "key": "bottle-bottle-16-fl-oz",
      "kind": "unit",
      "label": "bottle bottle 16 fl oz"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "serving-child-12-fl-oz",
      "kind": "unit",
      "label": "serving child 12 fl oz"
    },
    {
      "gramsPerUnit": 29.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, carbonated, low calorie, cola or pepper-type, with aspartame, contains caffeine",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.29,
    "energy_kcal": 2.0,
    "fat_g": 0.03,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.11,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 8.0,
    "protein_g": 0.11,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175099",
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
