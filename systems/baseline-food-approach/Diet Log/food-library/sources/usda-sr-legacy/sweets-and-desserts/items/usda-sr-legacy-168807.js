/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-5-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-168807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "serving-5-pieces",
      "kind": "unit",
      "label": "serving 5 pieces"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, MILKY WAY Caramels. dark chocolate covered",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 67.6,
    "energy_kcal": 1920.0,
    "fat_g": 20.4,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.82,
    "salt_g": 0.615,
    "sat_fat_g": 13.8,
    "sodium_mg": 246.0,
    "sugar_g": 54.1,
    "vitamin_a_ug": 246.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168807",
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
