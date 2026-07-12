/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-crust-average-weight",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "pie-crust-average-weight",
      "kind": "unit",
      "label": "pie crust (average weight)"
    }
  ],
  "name": "Pie crust, refrigerated, regular, unbaked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 51.1,
    "energy_kcal": 1860.0,
    "fat_g": 25.5,
    "fibre_g": 1.8,
    "folate_ug": 25.0,
    "iron_mg": 1.02,
    "magnesium_mg": 8.0,
    "omega3_g": 0.131,
    "phosphorus_mg": 45.0,
    "potassium_mg": 73.0,
    "protein_g": 2.97,
    "salt_g": 1.0225,
    "sat_fat_g": 9.6,
    "sodium_mg": 409.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167932",
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
