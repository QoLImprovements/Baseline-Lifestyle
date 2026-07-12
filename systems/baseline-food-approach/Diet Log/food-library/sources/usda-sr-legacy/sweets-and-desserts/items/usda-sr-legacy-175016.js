/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-6-of-7-pie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "piece-1-6-of-7-pie",
      "kind": "unit",
      "label": "piece (1/6 of 7\" pie)"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "piece-1-8-of-7-pie",
      "kind": "unit",
      "label": "piece (1/8 of 7\" pie)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, coconut creme, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 37.3,
    "energy_kcal": 1250.0,
    "fat_g": 16.6,
    "fibre_g": 1.3,
    "folate_ug": 7.0,
    "iron_mg": 0.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 65.0,
    "protein_g": 2.1,
    "salt_g": 0.51,
    "sat_fat_g": 6.98,
    "sodium_mg": 204.0,
    "sugar_g": 18.5,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175016",
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
