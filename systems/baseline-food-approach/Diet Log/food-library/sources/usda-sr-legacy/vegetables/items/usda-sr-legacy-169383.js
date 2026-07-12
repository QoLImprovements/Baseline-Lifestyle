/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-strips",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "pepper-large-3-3-4-long-3-dia",
      "kind": "unit",
      "label": "pepper, large (3-3/4\" long, 3\" dia)"
    }
  ],
  "name": "Peppers, sweet, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 6.32,
    "energy_kcal": 112.0,
    "fat_g": 0.21,
    "fibre_g": 0.9,
    "folate_ug": 26.0,
    "iron_mg": 0.46,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 212.0,
    "protein_g": 1.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.031,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 184.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169383",
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
