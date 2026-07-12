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
  "id": "usda-sr-legacy-173168",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "jigger-1-5-fl-oz",
      "kind": "unit",
      "label": "jigger 1.5 fl oz"
    }
  ],
  "name": "Alcoholic beverage, creme de menthe, 72 proof",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 41.6,
    "energy_kcal": 1550.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.0125,
    "sat_fat_g": 0.014,
    "sodium_mg": 5.0,
    "sugar_g": 41.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173168",
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
