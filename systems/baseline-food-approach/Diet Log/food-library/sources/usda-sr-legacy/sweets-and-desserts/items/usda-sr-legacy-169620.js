/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-08-package",
  "description": "Sweets",
  "id": "usda-sr-legacy-169620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "0-08-package",
      "kind": "unit",
      "label": "0.08 package"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tbsp-creamy",
      "kind": "unit",
      "label": "2 tbsp creamy"
    },
    {
      "gramsPerUnit": 462.0,
      "key": "package-16-oz",
      "kind": "unit",
      "label": "package (16 oz)"
    }
  ],
  "name": "Frostings, vanilla, creamy, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 67.9,
    "energy_kcal": 1750.0,
    "fat_g": 16.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.16,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 34.0,
    "protein_g": 0.0,
    "salt_g": 0.46,
    "sat_fat_g": 2.97,
    "sodium_mg": 184.0,
    "sugar_g": 63.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169620",
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
