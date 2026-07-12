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
  "id": "usda-sr-legacy-172785",
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
      "gramsPerUnit": 113.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    }
  ],
  "name": "Pie, lemon meringue, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 47.2,
    "energy_kcal": 1120.0,
    "fat_g": 8.7,
    "fibre_g": 1.2,
    "folate_ug": 24.0,
    "iron_mg": 0.61,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 105.0,
    "potassium_mg": 89.0,
    "protein_g": 1.5,
    "salt_g": 0.43,
    "sat_fat_g": 1.77,
    "sodium_mg": 172.0,
    "sugar_g": 23.9,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172785",
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
