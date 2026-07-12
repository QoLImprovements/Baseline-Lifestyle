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
  "id": "usda-sr-legacy-172788",
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
  "name": "Pie, pumpkin, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 26.4,
    "energy_kcal": 854.0,
    "fat_g": 9.3,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 1.27,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 98.0,
    "potassium_mg": 186.0,
    "protein_g": 4.5,
    "salt_g": 0.5625,
    "sat_fat_g": 3.17,
    "sodium_mg": 225.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 426.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172788",
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
