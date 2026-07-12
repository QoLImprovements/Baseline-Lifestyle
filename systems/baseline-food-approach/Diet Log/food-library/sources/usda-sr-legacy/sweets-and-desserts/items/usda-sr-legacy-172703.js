/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172703",
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
      "gramsPerUnit": 115.0,
      "key": "piece-1-9-of-8-square",
      "kind": "unit",
      "label": "piece (1/9 of 8\" square)"
    }
  ],
  "name": "Cake, pineapple upside-down, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 50.5,
    "energy_kcal": 1340.0,
    "fat_g": 12.1,
    "fibre_g": 0.8,
    "folate_ug": 26.0,
    "iron_mg": 1.48,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 82.0,
    "potassium_mg": 112.0,
    "protein_g": 3.5,
    "salt_g": 0.7975,
    "sat_fat_g": 2.92,
    "sodium_mg": 319.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172703",
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
