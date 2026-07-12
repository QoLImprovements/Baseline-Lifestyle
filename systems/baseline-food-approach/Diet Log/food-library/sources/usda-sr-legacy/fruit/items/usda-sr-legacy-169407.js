/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Seeds, watermelon seed kernels, dried",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 15.3,
    "energy_kcal": 2330.0,
    "fat_g": 47.4,
    "fibre_g": 0.0,
    "folate_ug": 58.0,
    "iron_mg": 7.28,
    "magnesium_mg": 515.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 755.0,
    "potassium_mg": 648.0,
    "protein_g": 28.3,
    "salt_g": 0.2475,
    "sat_fat_g": 9.78,
    "sodium_mg": 99.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169407",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "fruit",
    "nut-and-seed-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
