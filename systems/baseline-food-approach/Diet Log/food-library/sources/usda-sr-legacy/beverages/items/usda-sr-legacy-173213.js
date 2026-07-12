/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173213",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "6-fl-oz",
      "kind": "unit",
      "label": "6 fl oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Beverages, grape juice drink, canned",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 14.6,
    "energy_kcal": 237.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.13,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 33.0,
    "protein_g": 0.0,
    "salt_g": 0.0225,
    "sat_fat_g": 0.0,
    "sodium_mg": 9.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173213",
  "state": "Canned",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "canned"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
