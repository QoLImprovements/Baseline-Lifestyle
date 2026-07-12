/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Archway Home Style Cookies, Strawberry Filled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 65.9,
    "energy_kcal": 400.0,
    "fat_g": 13.3,
    "fibre_g": 2.2,
    "folate_ug": 62.0,
    "iron_mg": 2.32,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 118.0,
    "protein_g": 4.35,
    "salt_g": 0.9425,
    "sat_fat_g": 5.16,
    "sodium_mg": 377.0,
    "sugar_g": 31.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175076",
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
