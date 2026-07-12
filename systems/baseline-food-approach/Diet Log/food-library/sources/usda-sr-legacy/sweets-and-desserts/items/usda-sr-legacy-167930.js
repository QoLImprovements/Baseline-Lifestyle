/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "pie-crust",
      "kind": "unit",
      "label": "pie crust"
    }
  ],
  "name": "Pie crust, refrigerated, regular, baked",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 58.5,
    "energy_kcal": 2120.0,
    "fat_g": 28.7,
    "fibre_g": 1.4,
    "folate_ug": 32.0,
    "iron_mg": 1.15,
    "magnesium_mg": 9.0,
    "omega3_g": 0.148,
    "phosphorus_mg": 52.0,
    "potassium_mg": 83.0,
    "protein_g": 3.41,
    "salt_g": 1.18,
    "sat_fat_g": 11.1,
    "sodium_mg": 472.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167930",
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
