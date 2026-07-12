/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 4.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Margarine, industrial, soy and partially hydrogenated soy oil, use for baking, sauces and candy",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.71,
    "energy_kcal": 2990.0,
    "fat_g": 80.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 1.0,
    "omega3_g": 2.41,
    "phosphorus_mg": 5.0,
    "potassium_mg": 18.0,
    "protein_g": 0.18,
    "salt_g": 2.215,
    "sat_fat_g": 16.3,
    "sodium_mg": 886.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3570.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.23,
    "vitamin_k_ug": 75.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172369",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
