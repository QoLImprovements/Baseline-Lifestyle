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
  "id": "usda-sr-legacy-173224",
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
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, pineapple and grapefruit juice drink, canned",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.6,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 61.0,
    "protein_g": 0.2,
    "salt_g": 0.035,
    "sat_fat_g": 0.006,
    "sodium_mg": 14.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 46.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173224",
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
