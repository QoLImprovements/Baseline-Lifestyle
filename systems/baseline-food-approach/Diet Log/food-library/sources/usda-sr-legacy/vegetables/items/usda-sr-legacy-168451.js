/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 338.0,
      "key": "radish-7-long",
      "kind": "unit",
      "label": "radish (7\" long)"
    }
  ],
  "name": "Radishes, oriental, raw",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 4.1,
    "energy_kcal": 76.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 28.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 227.0,
    "protein_g": 0.6,
    "salt_g": 0.0525,
    "sat_fat_g": 0.03,
    "sodium_mg": 21.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168451",
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
