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
  "id": "usda-sr-legacy-175019",
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
      "gramsPerUnit": 165.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    }
  ],
  "name": "Pie, mince, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 48.0,
    "energy_kcal": 1210.0,
    "fat_g": 10.8,
    "fibre_g": 2.6,
    "folate_ug": 23.0,
    "iron_mg": 1.49,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 203.0,
    "protein_g": 2.6,
    "salt_g": 0.635,
    "sat_fat_g": 2.68,
    "sodium_mg": 254.0,
    "sugar_g": 28.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175019",
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
