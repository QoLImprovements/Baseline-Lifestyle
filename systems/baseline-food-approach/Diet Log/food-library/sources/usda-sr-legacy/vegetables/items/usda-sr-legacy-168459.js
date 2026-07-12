/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-flowers",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "cup-flowers",
      "kind": "unit",
      "label": "cup flowers"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "flower",
      "kind": "unit",
      "label": "flower"
    }
  ],
  "name": "Sesbania flower, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.73,
    "energy_kcal": 113.0,
    "fat_g": 0.04,
    "fibre_g": 0.0,
    "folate_ug": 102.0,
    "iron_mg": 0.84,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 184.0,
    "protein_g": 1.28,
    "salt_g": 0.0375,
    "sat_fat_g": 0.0,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 73.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168459",
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
