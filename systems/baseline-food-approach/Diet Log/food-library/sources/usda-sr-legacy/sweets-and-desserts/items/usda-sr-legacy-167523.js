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
  "id": "usda-sr-legacy-167523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "pie-crust-average-weight",
      "kind": "unit",
      "label": "pie crust (average weight)"
    }
  ],
  "name": "Pie crust, deep dish, frozen, unbaked, made with enriched flour",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 46.8,
    "energy_kcal": 468.0,
    "fat_g": 28.7,
    "fibre_g": 1.4,
    "folate_ug": 77.0,
    "iron_mg": 2.26,
    "magnesium_mg": 15.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 68.0,
    "potassium_mg": 91.0,
    "protein_g": 5.52,
    "salt_g": 0.8825,
    "sat_fat_g": 8.13,
    "sodium_mg": 353.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167523",
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
