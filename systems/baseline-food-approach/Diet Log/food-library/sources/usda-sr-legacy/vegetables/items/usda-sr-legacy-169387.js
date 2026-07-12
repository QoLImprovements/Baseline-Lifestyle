/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169387",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Arugula, raw",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 3.65,
    "energy_kcal": 25.0,
    "fat_g": 0.66,
    "fibre_g": 1.6,
    "folate_ug": 97.0,
    "iron_mg": 1.46,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 369.0,
    "protein_g": 2.58,
    "salt_g": 0.0675,
    "sat_fat_g": 0.086,
    "sodium_mg": 27.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169387",
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
