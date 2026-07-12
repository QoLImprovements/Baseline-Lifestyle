/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-15-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "serving-15-pieces",
      "kind": "unit",
      "label": "serving 15 pieces"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, POP'ABLES 3 MUSKETEERS Brand Bite Size Candies",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 75.9,
    "energy_kcal": 1850.0,
    "fat_g": 15.2,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.58,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.59,
    "salt_g": 0.43,
    "sat_fat_g": 9.92,
    "sodium_mg": 172.0,
    "sugar_g": 67.0,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169645",
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
