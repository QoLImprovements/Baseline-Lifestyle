/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "0-08-package",
      "kind": "unit",
      "label": "0.08 package"
    },
    {
      "gramsPerUnit": 462.0,
      "key": "package-16-oz",
      "kind": "unit",
      "label": "package (16 oz)"
    }
  ],
  "name": "Frostings, coconut-nut, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 52.7,
    "energy_kcal": 433.0,
    "fat_g": 24.0,
    "fibre_g": 2.5,
    "folate_ug": 2.0,
    "iron_mg": 0.54,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 186.0,
    "protein_g": 1.5,
    "salt_g": 0.4,
    "sat_fat_g": 8.63,
    "sodium_mg": 160.0,
    "sugar_g": 40.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169618",
  "state": "Ready-to-eat",
  "subcategory": "Sweets",
  "tags": [
    "ready-to-eat",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
