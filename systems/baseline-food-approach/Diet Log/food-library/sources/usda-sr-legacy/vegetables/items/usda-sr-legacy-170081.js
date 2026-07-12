/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "radish-7-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "radish-7-long",
      "kind": "unit",
      "label": "radish (7\" long)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Radishes, white icicle, raw",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 2.63,
    "energy_kcal": 59.0,
    "fat_g": 0.1,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.8,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 280.0,
    "protein_g": 1.1,
    "salt_g": 0.04,
    "sat_fat_g": 0.03,
    "sodium_mg": 16.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 29.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170081",
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
