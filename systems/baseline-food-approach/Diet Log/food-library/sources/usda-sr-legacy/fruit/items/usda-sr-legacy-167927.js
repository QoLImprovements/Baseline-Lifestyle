/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167927",
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
      "gramsPerUnit": 53.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Toaster Pastries, fruit, frosted (include apples, blueberry, cherry, strawberry)",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 71.8,
    "energy_kcal": 1610.0,
    "fat_g": 9.02,
    "fibre_g": 1.8,
    "folate_ug": 90.0,
    "iron_mg": 4.35,
    "magnesium_mg": 11.0,
    "omega3_g": 0.358,
    "phosphorus_mg": 71.0,
    "potassium_mg": 86.0,
    "protein_g": 4.01,
    "salt_g": 0.7775,
    "sat_fat_g": 3.09,
    "sodium_mg": 311.0,
    "sugar_g": 31.0,
    "vitamin_a_ug": 202.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 19.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167927",
  "state": "Raw",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
