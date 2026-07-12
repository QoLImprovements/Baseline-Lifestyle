/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-5-x-3-3-4",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173240",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "pie-5-x-3-3-4",
      "kind": "unit",
      "label": "pie (5\" x 3-3/4\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, fried pies, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 42.6,
    "energy_kcal": 1320.0,
    "fat_g": 16.1,
    "fibre_g": 2.6,
    "folate_ug": 18.0,
    "iron_mg": 1.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 65.0,
    "protein_g": 3.0,
    "salt_g": 0.935,
    "sat_fat_g": 2.46,
    "sodium_mg": 374.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173240",
  "state": "Fried",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fried",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
