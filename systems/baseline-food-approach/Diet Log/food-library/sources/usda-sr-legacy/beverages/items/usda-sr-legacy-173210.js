/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-16-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 492.0,
      "key": "serving-16-fl-oz",
      "kind": "unit",
      "label": "serving 16 fl oz"
    },
    {
      "gramsPerUnit": 369.0,
      "key": "serving-12-fl-oz",
      "kind": "unit",
      "label": "serving 12 fl oz"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "can-8-4-fl-oz",
      "kind": "unit",
      "label": "can 8.4 fl oz"
    }
  ],
  "name": "Beverages, Energy drink, RED BULL",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 10.2,
    "energy_kcal": 179.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.06,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 3.0,
    "protein_g": 0.46,
    "salt_g": 0.0975,
    "sat_fat_g": 0.0,
    "sodium_mg": 39.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173210",
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
