/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.4,
      "key": "3-crackers",
      "kind": "unit",
      "label": "3 crackers"
    }
  ],
  "name": "Van's, The Perfect 10, Crispy Six Whole Grain + Four Seed Baked Crackers, Gluten Free",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 67.6,
    "energy_kcal": 471.0,
    "fat_g": 18.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.94,
    "magnesium_mg": 94.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 255.0,
    "protein_g": 7.63,
    "salt_g": 1.825,
    "sat_fat_g": 0.0,
    "sodium_mg": 730.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168012",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
