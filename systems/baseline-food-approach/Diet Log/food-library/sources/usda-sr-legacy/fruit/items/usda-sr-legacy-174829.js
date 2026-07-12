/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "serving-8-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "serving-8-oz",
      "kind": "unit",
      "label": "serving 8 oz"
    }
  ],
  "name": "Beverages, V8 SPLASH Smoothies, Strawberry Banana",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 8.16,
    "energy_kcal": 154.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.15,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 24.0,
    "protein_g": 1.22,
    "salt_g": 0.0725,
    "sat_fat_g": 0.0,
    "sodium_mg": 29.0,
    "sugar_g": 7.35,
    "vitamin_a_ug": 408.0,
    "vitamin_c_mg": 24.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174829",
  "state": "Raw",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
