/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 282.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Fruit butters, apple",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 42.5,
    "energy_kcal": 173.0,
    "fat_g": 0.3,
    "fibre_g": 1.5,
    "folate_ug": 1.0,
    "iron_mg": 0.31,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 91.0,
    "protein_g": 0.39,
    "salt_g": 0.0375,
    "sat_fat_g": 0.053,
    "sodium_mg": 15.0,
    "sugar_g": 35.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168816",
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
