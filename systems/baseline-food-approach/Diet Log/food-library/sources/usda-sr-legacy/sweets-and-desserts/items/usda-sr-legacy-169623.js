/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "16-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "16-pieces",
      "kind": "unit",
      "label": "16 pieces"
    }
  ],
  "name": "Candies, REESE'S BITES",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 55.2,
    "energy_kcal": 521.0,
    "fat_g": 29.8,
    "fibre_g": 3.1,
    "folate_ug": 42.0,
    "iron_mg": 0.85,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 194.0,
    "potassium_mg": 382.0,
    "protein_g": 11.3,
    "salt_g": 0.4475,
    "sat_fat_g": 18.0,
    "sodium_mg": 179.0,
    "sugar_g": 48.0,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169623",
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
