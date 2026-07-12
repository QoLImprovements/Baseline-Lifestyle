/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-fun-size-8-chews",
  "description": "Sweets",
  "id": "usda-sr-legacy-169646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-fun-size-8-chews",
      "kind": "unit",
      "label": "serving fun size (8 chews)"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Fruit and Creme",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 82.4,
    "energy_kcal": 408.0,
    "fat_g": 8.36,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.01,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.41,
    "salt_g": 0.005,
    "sat_fat_g": 7.93,
    "sodium_mg": 2.0,
    "sugar_g": 58.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169646",
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
