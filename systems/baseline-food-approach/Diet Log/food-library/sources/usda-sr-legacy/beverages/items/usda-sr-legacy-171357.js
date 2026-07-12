/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-4-fl-oz",
      "kind": "unit",
      "label": "bottle (4 fl oz)"
    }
  ],
  "name": "Babyfood, juice, mixed fruit",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 11.7,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.34,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 101.0,
    "protein_g": 0.1,
    "salt_g": 0.02,
    "sat_fat_g": 0.015,
    "sodium_mg": 8.0,
    "sugar_g": 8.46,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 63.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171357",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
