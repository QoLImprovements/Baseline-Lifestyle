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
  "id": "usda-sr-legacy-173223",
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
      "gramsPerUnit": 250.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, orange and apricot juice drink, canned",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 12.7,
    "energy_kcal": 51.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.1,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 80.0,
    "protein_g": 0.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.01,
    "sodium_mg": 2.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173223",
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
