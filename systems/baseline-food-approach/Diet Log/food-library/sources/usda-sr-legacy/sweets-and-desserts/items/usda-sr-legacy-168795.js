/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp-creamy",
  "description": "Sweets",
  "id": "usda-sr-legacy-168795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "2-tbsp-creamy",
      "kind": "unit",
      "label": "2 tbsp creamy"
    }
  ],
  "name": "Frostings, chocolate, creamy, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 63.2,
    "energy_kcal": 1660.0,
    "fat_g": 17.6,
    "fibre_g": 0.9,
    "folate_ug": 1.0,
    "iron_mg": 1.42,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 196.0,
    "protein_g": 1.1,
    "salt_g": 0.4575,
    "sat_fat_g": 5.53,
    "sodium_mg": 183.0,
    "sugar_g": 57.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168795",
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
