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
  "id": "usda-sr-legacy-168864",
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
    }
  ],
  "name": "Snacks, potato chips, made from dried potatoes, fat-free, made with olestra",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 56.0,
    "energy_kcal": 1060.0,
    "fat_g": 0.93,
    "fibre_g": 7.3,
    "folate_ug": 67.0,
    "iron_mg": 1.14,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 931.0,
    "protein_g": 5.06,
    "salt_g": 1.0725,
    "sat_fat_g": 0.355,
    "sodium_mg": 429.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 109.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 329.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168864",
  "state": "Dried",
  "subcategory": "Snacks",
  "tags": [
    "dried",
    "potatoes-and-starchy-vegetables",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
