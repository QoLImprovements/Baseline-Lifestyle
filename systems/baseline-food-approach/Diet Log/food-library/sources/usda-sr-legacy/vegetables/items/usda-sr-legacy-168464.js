/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    }
  ],
  "name": "Squash, summer, crookneck and straightneck, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 3.88,
    "energy_kcal": 19.0,
    "fat_g": 0.27,
    "fibre_g": 1.0,
    "folate_ug": 19.0,
    "iron_mg": 0.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 32.0,
    "potassium_mg": 222.0,
    "protein_g": 1.01,
    "salt_g": 0.005,
    "sat_fat_g": 0.093,
    "sodium_mg": 2.0,
    "sugar_g": 2.88,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168464",
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
