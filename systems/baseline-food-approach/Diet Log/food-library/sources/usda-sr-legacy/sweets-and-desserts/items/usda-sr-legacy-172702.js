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
  "id": "usda-sr-legacy-172702",
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
      "gramsPerUnit": 74.0,
      "key": "piece-1-9-of-8-square",
      "kind": "unit",
      "label": "piece (1/9 of 8\" square)"
    }
  ],
  "name": "Cake, gingerbread, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 49.2,
    "energy_kcal": 1490.0,
    "fat_g": 16.4,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 2.88,
    "magnesium_mg": 70.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 54.0,
    "potassium_mg": 439.0,
    "protein_g": 3.9,
    "salt_g": 0.8175,
    "sat_fat_g": 4.12,
    "sodium_mg": 327.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172702",
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
