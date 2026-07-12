/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Amaranth leaves, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 4.11,
    "energy_kcal": 88.0,
    "fat_g": 0.18,
    "fibre_g": 0.0,
    "folate_ug": 57.0,
    "iron_mg": 2.26,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 641.0,
    "protein_g": 2.11,
    "salt_g": 0.6425,
    "sat_fat_g": 0.05,
    "sodium_mg": 257.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 139.0,
    "vitamin_c_mg": 41.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168492",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
