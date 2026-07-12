/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "large",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 323.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Squash, summer, zucchini, includes skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 3.11,
    "energy_kcal": 17.0,
    "fat_g": 0.32,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 0.37,
    "magnesium_mg": 18.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 38.0,
    "potassium_mg": 261.0,
    "protein_g": 1.21,
    "salt_g": 0.02,
    "sat_fat_g": 0.084,
    "sodium_mg": 8.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 17.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169291",
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
