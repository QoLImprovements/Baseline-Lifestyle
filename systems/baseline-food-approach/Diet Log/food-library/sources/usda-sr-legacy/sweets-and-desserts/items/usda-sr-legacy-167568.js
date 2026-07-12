/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-5-oz-hersheys",
  "description": "Sweets",
  "id": "usda-sr-legacy-167568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz-hersheys",
      "kind": "unit",
      "label": "0.5 oz Hersheys"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-grated",
      "kind": "unit",
      "label": "cup, grated"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "oz-square-bakers",
      "kind": "unit",
      "label": "oz square Bakers"
    }
  ],
  "name": "Baking chocolate, unsweetened, squares",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 28.4,
    "energy_kcal": 2680.0,
    "fat_g": 52.3,
    "fibre_g": 16.6,
    "folate_ug": 28.0,
    "iron_mg": 17.4,
    "magnesium_mg": 327.0,
    "omega3_g": 0.117,
    "phosphorus_mg": 400.0,
    "potassium_mg": 830.0,
    "protein_g": 14.3,
    "salt_g": 0.06,
    "sat_fat_g": 32.3,
    "sodium_mg": 24.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167568",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
