/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-9-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169268",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "package-9-oz-yields",
      "kind": "unit",
      "label": "package (9 oz), yields"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    }
  ],
  "name": "Potatoes, frozen, french fried, par fried, extruded, prepared, heated in oven, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 39.7,
    "energy_kcal": 1390.0,
    "fat_g": 18.7,
    "fibre_g": 3.2,
    "folate_ug": 22.0,
    "iron_mg": 1.66,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 539.0,
    "protein_g": 3.55,
    "salt_g": 1.5325,
    "sat_fat_g": 5.96,
    "sodium_mg": 613.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169268",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
