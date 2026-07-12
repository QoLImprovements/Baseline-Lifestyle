/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "drink-box-8-45-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-169044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "drink-box-8-45-fl-oz",
      "kind": "unit",
      "label": "drink box (8.45 fl oz)"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Orange juice drink",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 13.4,
    "energy_kcal": 54.0,
    "fat_g": 0.0,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.11,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 42.0,
    "protein_g": 0.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 9.36,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169044",
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
