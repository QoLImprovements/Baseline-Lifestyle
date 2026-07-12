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
  "id": "usda-sr-legacy-170649",
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
  "name": "Snacks, potato chips, plain, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 52.9,
    "energy_kcal": 2240.0,
    "fat_g": 34.6,
    "fibre_g": 4.8,
    "folate_ug": 45.0,
    "iron_mg": 1.63,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 1280.0,
    "protein_g": 7.0,
    "salt_g": 0.02,
    "sat_fat_g": 11.0,
    "sodium_mg": 8.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 31.1,
    "vitamin_e_mg": 9.11,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170649",
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
