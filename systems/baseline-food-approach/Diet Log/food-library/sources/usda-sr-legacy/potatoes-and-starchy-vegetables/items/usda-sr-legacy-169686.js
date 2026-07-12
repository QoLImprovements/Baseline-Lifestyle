/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "bag-8-oz",
      "kind": "unit",
      "label": "bag (8 oz)"
    }
  ],
  "name": "Snacks, potato chips, fat free, salted",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 83.8,
    "energy_kcal": 1590.0,
    "fat_g": 0.6,
    "fibre_g": 7.5,
    "folate_ug": 45.0,
    "iron_mg": 3.57,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 1630.0,
    "protein_g": 9.64,
    "salt_g": 1.6075,
    "sat_fat_g": 0.15,
    "sodium_mg": 643.0,
    "sugar_g": 3.69,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169686",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
