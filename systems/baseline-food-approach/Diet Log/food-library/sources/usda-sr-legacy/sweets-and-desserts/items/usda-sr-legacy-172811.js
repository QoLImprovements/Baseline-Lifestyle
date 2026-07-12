/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "crust-single-9",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "crust-single-9",
      "kind": "unit",
      "label": "crust, single 9\""
    },
    {
      "gramsPerUnit": 30.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    }
  ],
  "name": "Pie crust, cookie-type, prepared from recipe, graham cracker, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 63.9,
    "energy_kcal": 2020.0,
    "fat_g": 24.4,
    "fibre_g": 1.5,
    "folate_ug": 34.0,
    "iron_mg": 2.12,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 86.0,
    "protein_g": 4.1,
    "salt_g": 1.4,
    "sat_fat_g": 5.09,
    "sodium_mg": 560.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 191.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.28,
    "vitamin_k_ug": 24.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172811",
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
