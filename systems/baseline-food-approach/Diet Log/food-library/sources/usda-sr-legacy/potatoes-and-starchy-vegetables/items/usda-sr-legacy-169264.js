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
  "id": "usda-sr-legacy-169264",
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
      "gramsPerUnit": 76.0,
      "key": "10-fries",
      "kind": "unit",
      "label": "10 fries"
    }
  ],
  "name": "Potatoes, french fried, all types, salt added in processing, frozen, home-prepared, oven heated",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 25.6,
    "energy_kcal": 662.0,
    "fat_g": 5.48,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.223,
    "phosphorus_mg": 87.0,
    "potassium_mg": 478.0,
    "protein_g": 2.75,
    "salt_g": 0.81,
    "sat_fat_g": 0.848,
    "sodium_mg": 324.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169264",
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
