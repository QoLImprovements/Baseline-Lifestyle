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
  "id": "usda-sr-legacy-175012",
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
      "gramsPerUnit": 155.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    }
  ],
  "name": "Pie, apple, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 37.1,
    "energy_kcal": 1110.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.12,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 79.0,
    "protein_g": 2.4,
    "salt_g": 0.5275,
    "sat_fat_g": 3.05,
    "sodium_mg": 211.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175012",
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
