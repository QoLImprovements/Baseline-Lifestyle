/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 323.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Squash, summer, all varieties, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 3.35,
    "energy_kcal": 16.0,
    "fat_g": 0.18,
    "fibre_g": 1.1,
    "folate_ug": 29.0,
    "iron_mg": 0.35,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 262.0,
    "protein_g": 1.21,
    "salt_g": 0.005,
    "sat_fat_g": 0.044,
    "sodium_mg": 2.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170487",
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
