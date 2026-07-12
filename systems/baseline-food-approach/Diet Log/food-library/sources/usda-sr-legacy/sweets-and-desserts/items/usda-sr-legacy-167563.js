/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "18-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-167563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "18-pieces",
      "kind": "unit",
      "label": "18 pieces"
    }
  ],
  "name": "Candies, TWIZZLERS CHERRY BITES",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 79.4,
    "energy_kcal": 1410.0,
    "fat_g": 1.7,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.55,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 14.0,
    "protein_g": 2.97,
    "salt_g": 0.6525,
    "sat_fat_g": 0.25,
    "sodium_mg": 261.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167563",
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
