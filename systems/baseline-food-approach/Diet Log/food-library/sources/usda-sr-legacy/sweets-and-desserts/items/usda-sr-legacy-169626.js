/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-yields",
  "description": "Sweets",
  "id": "usda-sr-legacy-169626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "package-yields",
      "kind": "unit",
      "label": "package yields"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "0-08-package",
      "kind": "unit",
      "label": "0.08 package"
    }
  ],
  "name": "Frostings, white, fluffy, dry mix, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 62.6,
    "energy_kcal": 1020.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.06,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 77.0,
    "protein_g": 1.5,
    "salt_g": 0.39,
    "sat_fat_g": 0.0,
    "sodium_mg": 156.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169626",
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
