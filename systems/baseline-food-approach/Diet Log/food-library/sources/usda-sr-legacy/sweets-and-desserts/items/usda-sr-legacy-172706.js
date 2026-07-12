/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-16-oz-cake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "piece-1-12-of-16-oz-cake",
      "kind": "unit",
      "label": "piece (1/12 of 16 oz cake)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, sponge, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 61.0,
    "energy_kcal": 1210.0,
    "fat_g": 2.7,
    "fibre_g": 0.5,
    "folate_ug": 47.0,
    "iron_mg": 2.72,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 137.0,
    "potassium_mg": 99.0,
    "protein_g": 5.4,
    "salt_g": 1.5575,
    "sat_fat_g": 0.802,
    "sodium_mg": 623.0,
    "sugar_g": 36.7,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172706",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
