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
  "id": "usda-sr-legacy-168573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 4.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Lemon grass (citronella), raw",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 25.3,
    "energy_kcal": 414.0,
    "fat_g": 0.49,
    "fibre_g": 0.0,
    "folate_ug": 75.0,
    "iron_mg": 8.17,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 723.0,
    "protein_g": 1.82,
    "salt_g": 0.015,
    "sat_fat_g": 0.119,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168573",
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
