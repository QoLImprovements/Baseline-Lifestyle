/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-8-fluid-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "serving-8-fluid-oz",
      "kind": "unit",
      "label": "serving 8 fluid oz"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Beverages, Energy drink, FULL THROTTLE",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.1,
    "energy_kcal": 46.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 3.0,
    "protein_g": 0.25,
    "salt_g": 0.0875,
    "sat_fat_g": 0.0,
    "sodium_mg": 35.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174172",
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
