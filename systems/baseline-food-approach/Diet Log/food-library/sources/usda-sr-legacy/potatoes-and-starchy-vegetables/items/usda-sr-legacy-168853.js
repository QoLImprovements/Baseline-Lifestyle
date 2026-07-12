/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "16-chips",
  "description": "Snacks",
  "id": "usda-sr-legacy-168853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "16-chips",
      "kind": "unit",
      "label": "16 chips"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "can-7-oz",
      "kind": "unit",
      "label": "can (7 oz)"
    }
  ],
  "name": "Snack, potato chips, made from dried potatoes, plain",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 55.4,
    "energy_kcal": 2280.0,
    "fat_g": 35.3,
    "fibre_g": 2.9,
    "folate_ug": 19.0,
    "iron_mg": 0.8,
    "magnesium_mg": 40.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 110.0,
    "potassium_mg": 637.0,
    "protein_g": 4.62,
    "salt_g": 1.3225,
    "sat_fat_g": 8.64,
    "sodium_mg": 529.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 13.7,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168853",
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
