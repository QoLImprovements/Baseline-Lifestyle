/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tablespoon",
  "description": "Sweets",
  "id": "usda-sr-legacy-167706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Jams, preserves, marmalade, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 37.6,
    "energy_kcal": 151.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 18.0,
    "iron_mg": 0.0,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 59.0,
    "protein_g": 0.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.005,
    "sodium_mg": 0.0,
    "sugar_g": 29.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167706",
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
