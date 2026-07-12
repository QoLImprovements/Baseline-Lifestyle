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
  "id": "usda-sr-legacy-170125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Squash, summer, all varieties, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 4.31,
    "energy_kcal": 20.0,
    "fat_g": 0.31,
    "fibre_g": 1.4,
    "folate_ug": 20.0,
    "iron_mg": 0.36,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 192.0,
    "protein_g": 0.91,
    "salt_g": 0.5925,
    "sat_fat_g": 0.064,
    "sodium_mg": 237.0,
    "sugar_g": 2.59,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170125",
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
