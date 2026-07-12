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
  "id": "usda-sr-legacy-169678",
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
      "gramsPerUnit": 191.0,
      "key": "can-6-25-oz",
      "kind": "unit",
      "label": "can (6.25 oz)"
    }
  ],
  "name": "Snacks, potato chips, made from dried potatoes, cheese-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 50.6,
    "energy_kcal": 2300.0,
    "fat_g": 37.0,
    "fibre_g": 3.4,
    "folate_ug": 18.0,
    "iron_mg": 1.6,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 381.0,
    "protein_g": 7.0,
    "salt_g": 1.5,
    "sat_fat_g": 9.57,
    "sodium_mg": 600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 8.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169678",
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
