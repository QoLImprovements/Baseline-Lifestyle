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
  "id": "usda-sr-legacy-175011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
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
  "name": "Pie, apple, commercially prepared, enriched flour",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 34.0,
    "energy_kcal": 992.0,
    "fat_g": 11.0,
    "fibre_g": 1.6,
    "folate_ug": 27.0,
    "iron_mg": 0.45,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 65.0,
    "protein_g": 1.9,
    "salt_g": 0.5025,
    "sat_fat_g": 3.8,
    "sodium_mg": 201.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175011",
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
