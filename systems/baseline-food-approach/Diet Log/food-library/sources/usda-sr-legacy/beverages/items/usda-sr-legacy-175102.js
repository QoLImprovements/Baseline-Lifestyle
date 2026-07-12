/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-medium-16-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 376.0,
      "key": "serving-medium-16-fl-oz",
      "kind": "unit",
      "label": "serving medium 16 fl oz"
    },
    {
      "gramsPerUnit": 494.0,
      "key": "serving-large-21-fl-oz",
      "kind": "unit",
      "label": "serving large 21 fl oz"
    },
    {
      "gramsPerUnit": 23.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 282.0,
      "key": "serving-small-12-fl-oz",
      "kind": "unit",
      "label": "serving small 12 fl oz"
    }
  ],
  "name": "Beverages, shake, fast food, strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 18.9,
    "energy_kcal": 473.0,
    "fat_g": 2.8,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.11,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 182.0,
    "protein_g": 3.4,
    "salt_g": 0.2075,
    "sat_fat_g": 1.73,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175102",
  "state": "Raw",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
