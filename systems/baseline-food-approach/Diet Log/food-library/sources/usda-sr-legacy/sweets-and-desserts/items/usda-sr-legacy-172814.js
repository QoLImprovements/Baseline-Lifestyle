/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-8-of-9-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "crust-single-9",
      "kind": "unit",
      "label": "crust, single 9\""
    }
  ],
  "name": "Pie crust, standard-type, prepared from recipe, unbaked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 42.3,
    "energy_kcal": 1960.0,
    "fat_g": 30.8,
    "fibre_g": 3.4,
    "folate_ug": 71.0,
    "iron_mg": 2.57,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 59.0,
    "protein_g": 5.7,
    "salt_g": 1.205,
    "sat_fat_g": 7.67,
    "sodium_mg": 482.0,
    "sugar_g": 0.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172814",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
