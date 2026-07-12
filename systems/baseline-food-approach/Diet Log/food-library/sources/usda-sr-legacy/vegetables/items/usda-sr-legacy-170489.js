/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, all varieties, raw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 8.59,
    "energy_kcal": 34.0,
    "fat_g": 0.13,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 0.58,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 350.0,
    "protein_g": 0.95,
    "salt_g": 0.01,
    "sat_fat_g": 0.027,
    "sodium_mg": 4.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170489",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
