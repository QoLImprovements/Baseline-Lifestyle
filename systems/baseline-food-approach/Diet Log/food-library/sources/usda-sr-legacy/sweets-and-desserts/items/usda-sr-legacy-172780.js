/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-6-of-8-pie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    }
  ],
  "name": "Pie, cherry, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 39.8,
    "energy_kcal": 1090.0,
    "fat_g": 11.0,
    "fibre_g": 0.8,
    "folate_ug": 27.0,
    "iron_mg": 0.48,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 81.0,
    "protein_g": 2.0,
    "salt_g": 0.615,
    "sat_fat_g": 2.56,
    "sodium_mg": 246.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172780",
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
