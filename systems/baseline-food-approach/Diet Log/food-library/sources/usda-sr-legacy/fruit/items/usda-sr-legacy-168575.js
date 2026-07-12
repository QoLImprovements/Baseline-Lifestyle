/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Grape leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 363.0,
    "carbs_g": 17.3,
    "energy_kcal": 390.0,
    "fat_g": 2.12,
    "fibre_g": 11.0,
    "folate_ug": 83.0,
    "iron_mg": 2.63,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 272.0,
    "protein_g": 5.6,
    "salt_g": 0.0225,
    "sat_fat_g": 0.336,
    "sodium_mg": 9.0,
    "sugar_g": 6.3,
    "vitamin_a_ug": 1380.0,
    "vitamin_c_mg": 11.1,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168575",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
