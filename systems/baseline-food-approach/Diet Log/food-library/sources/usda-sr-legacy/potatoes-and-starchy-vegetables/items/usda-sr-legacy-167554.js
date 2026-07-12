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
  "id": "usda-sr-legacy-167554",
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
      "gramsPerUnit": 198.0,
      "key": "can-6-75-oz",
      "kind": "unit",
      "label": "can (6.75 oz)"
    }
  ],
  "name": "Snacks, potato chips, made from dried potatoes, sour-cream and onion-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 51.3,
    "energy_kcal": 2290.0,
    "fat_g": 37.0,
    "fibre_g": 1.2,
    "folate_ug": 23.0,
    "iron_mg": 1.4,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 496.0,
    "protein_g": 6.6,
    "salt_g": 1.3525,
    "sat_fat_g": 9.47,
    "sodium_mg": 541.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 323.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167554",
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
