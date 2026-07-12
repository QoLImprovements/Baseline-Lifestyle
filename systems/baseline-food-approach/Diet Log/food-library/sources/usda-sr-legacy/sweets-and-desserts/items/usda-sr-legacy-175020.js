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
  "id": "usda-sr-legacy-175020",
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
    }
  ],
  "name": "Pie, peach",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 32.9,
    "energy_kcal": 936.0,
    "fat_g": 10.0,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 0.5,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 125.0,
    "protein_g": 1.9,
    "salt_g": 0.5425,
    "sat_fat_g": 1.51,
    "sodium_mg": 217.0,
    "sugar_g": 16.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175020",
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
