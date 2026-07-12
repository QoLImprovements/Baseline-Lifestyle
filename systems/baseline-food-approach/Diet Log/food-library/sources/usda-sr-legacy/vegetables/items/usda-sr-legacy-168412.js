/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "0-5-cup-chopped",
      "kind": "unit",
      "label": "0.5 cup, chopped"
    },
    {
      "gramsPerUnit": 513.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    }
  ],
  "name": "Endive, raw",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 3.35,
    "energy_kcal": 71.0,
    "fat_g": 0.2,
    "fibre_g": 3.1,
    "folate_ug": 142.0,
    "iron_mg": 0.83,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 314.0,
    "protein_g": 1.25,
    "salt_g": 0.055,
    "sat_fat_g": 0.048,
    "sodium_mg": 22.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 231.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168412",
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
