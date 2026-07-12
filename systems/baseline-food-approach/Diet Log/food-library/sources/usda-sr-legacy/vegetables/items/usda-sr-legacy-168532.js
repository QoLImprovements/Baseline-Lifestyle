/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Drumstick pods, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 8.18,
    "energy_kcal": 151.0,
    "fat_g": 0.19,
    "fibre_g": 4.2,
    "folate_ug": 30.0,
    "iron_mg": 0.45,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 457.0,
    "protein_g": 2.09,
    "salt_g": 0.6975,
    "sat_fat_g": 0.0,
    "sodium_mg": 279.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 97.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168532",
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
