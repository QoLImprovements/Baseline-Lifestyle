/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-shredded-or-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-shredded-or-chopped",
      "kind": "unit",
      "label": "cup, shredded or chopped"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "leaf-large",
      "kind": "unit",
      "label": "leaf, large"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 7.5,
      "key": "leaf-medium",
      "kind": "unit",
      "label": "leaf, medium"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "head-5-dia",
      "kind": "unit",
      "label": "head (5\" dia)"
    }
  ],
  "name": "Lettuce, butterhead (includes boston and bibb types), raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 2.23,
    "energy_kcal": 13.0,
    "fat_g": 0.22,
    "fibre_g": 1.1,
    "folate_ug": 73.0,
    "iron_mg": 1.24,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 238.0,
    "protein_g": 1.35,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 102.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168429",
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
