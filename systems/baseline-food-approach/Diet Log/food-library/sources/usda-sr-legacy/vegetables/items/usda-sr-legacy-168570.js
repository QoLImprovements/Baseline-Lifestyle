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
  "id": "usda-sr-legacy-168570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    }
  ],
  "name": "Peppers, hot chile, sun-dried",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 69.9,
    "energy_kcal": 324.0,
    "fat_g": 5.81,
    "fibre_g": 28.7,
    "folate_ug": 51.0,
    "iron_mg": 6.04,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 1870.0,
    "protein_g": 10.6,
    "salt_g": 0.2275,
    "sat_fat_g": 0.813,
    "sodium_mg": 91.0,
    "sugar_g": 41.1,
    "vitamin_a_ug": 1320.0,
    "vitamin_c_mg": 31.4,
    "vitamin_e_mg": 3.14,
    "vitamin_k_ug": 108.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168570",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
