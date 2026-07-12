/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package",
  "description": "Sweets",
  "id": "usda-sr-legacy-168802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "0-08-package",
      "kind": "unit",
      "label": "0.08 package"
    }
  ],
  "name": "Frostings, vanilla, creamy, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 93.8,
    "energy_kcal": 1720.0,
    "fat_g": 4.9,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 7.0,
    "protein_g": 0.3,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168802",
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
