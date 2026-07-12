/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "9-sprigs",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169997",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "9-sprigs",
      "kind": "unit",
      "label": "9 sprigs"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Coriander (cilantro) leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 3.67,
    "energy_kcal": 95.0,
    "fat_g": 0.52,
    "fibre_g": 2.8,
    "folate_ug": 62.0,
    "iron_mg": 1.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 521.0,
    "protein_g": 2.13,
    "salt_g": 0.115,
    "sat_fat_g": 0.014,
    "sodium_mg": 46.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 337.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 310.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169997",
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
