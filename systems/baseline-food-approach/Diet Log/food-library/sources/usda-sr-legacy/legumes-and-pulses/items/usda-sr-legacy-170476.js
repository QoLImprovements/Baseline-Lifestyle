/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "pod",
      "kind": "unit",
      "label": "pod"
    }
  ],
  "name": "Winged beans, immature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 4.31,
    "energy_kcal": 205.0,
    "fat_g": 0.87,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 1.5,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 223.0,
    "protein_g": 6.95,
    "salt_g": 0.01,
    "sat_fat_g": 0.238,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 128.0,
    "vitamin_c_mg": 18.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170476",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "legumes-and-pulses",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
