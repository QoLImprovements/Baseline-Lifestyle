/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, fish fillet, battered or breaded, fried",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 16.9,
    "energy_kcal": 219.0,
    "fat_g": 10.8,
    "fibre_g": 0.9,
    "folate_ug": 17.0,
    "iron_mg": 0.38,
    "magnesium_mg": 23.0,
    "omega3_g": 0.722,
    "phosphorus_mg": 207.0,
    "potassium_mg": 251.0,
    "protein_g": 13.5,
    "salt_g": 1.4025,
    "sat_fat_g": 1.88,
    "sodium_mg": 561.0,
    "sugar_g": 0.45,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169846",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fish-and-seafood",
    "fried",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
