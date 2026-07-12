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
  "id": "usda-sr-legacy-169682",
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
      "gramsPerUnit": 170.0,
      "key": "bag-6-oz",
      "kind": "unit",
      "label": "bag (6 oz)"
    }
  ],
  "name": "Snacks, potato chips, cheese-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 57.7,
    "energy_kcal": 2080.0,
    "fat_g": 27.2,
    "fibre_g": 5.2,
    "folate_ug": 0.0,
    "iron_mg": 1.84,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 299.0,
    "potassium_mg": 1530.0,
    "protein_g": 8.5,
    "salt_g": 1.145,
    "sat_fat_g": 8.6,
    "sodium_mg": 458.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 54.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169682",
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
