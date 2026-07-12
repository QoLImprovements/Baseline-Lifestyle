/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-8-of-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, lemon meringue, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 39.1,
    "energy_kcal": 1190.0,
    "fat_g": 12.9,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.0,
    "magnesium_mg": 6.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 42.0,
    "potassium_mg": 65.0,
    "protein_g": 3.8,
    "salt_g": 0.605,
    "sat_fat_g": 3.18,
    "sodium_mg": 242.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175018",
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
