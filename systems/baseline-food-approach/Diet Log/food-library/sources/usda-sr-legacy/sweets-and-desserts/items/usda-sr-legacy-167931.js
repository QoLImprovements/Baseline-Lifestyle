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
  "id": "usda-sr-legacy-167931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "pie-crust-average-weight",
      "kind": "unit",
      "label": "pie crust (average weight)"
    }
  ],
  "name": "Pie crust, deep dish, frozen, baked, made with enriched flour",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 52.5,
    "energy_kcal": 521.0,
    "fat_g": 31.8,
    "fibre_g": 2.3,
    "folate_ug": 94.0,
    "iron_mg": 2.47,
    "magnesium_mg": 17.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 77.0,
    "potassium_mg": 103.0,
    "protein_g": 6.1,
    "salt_g": 0.9825,
    "sat_fat_g": 8.86,
    "sodium_mg": 393.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 16.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167931",
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
