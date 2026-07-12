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
  "id": "usda-sr-legacy-168803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "0-08-package",
      "kind": "unit",
      "label": "0.08 package"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Frostings, white, fluffy, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 94.9,
    "energy_kcal": 1550.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.09,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 117.0,
    "protein_g": 2.3,
    "salt_g": 0.585,
    "sat_fat_g": 0.0,
    "sodium_mg": 234.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168803",
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
