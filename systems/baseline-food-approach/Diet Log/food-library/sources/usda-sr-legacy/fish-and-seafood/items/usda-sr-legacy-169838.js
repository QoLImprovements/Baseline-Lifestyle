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
  "id": "usda-sr-legacy-169838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, shrimp, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 22.3,
    "energy_kcal": 1290.0,
    "fat_g": 18.7,
    "fibre_g": 1.5,
    "folate_ug": 43.0,
    "iron_mg": 1.16,
    "magnesium_mg": 21.0,
    "omega3_g": 1.007,
    "phosphorus_mg": 301.0,
    "potassium_mg": 108.0,
    "protein_g": 12.7,
    "salt_g": 2.8,
    "sat_fat_g": 3.36,
    "sodium_mg": 1120.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 32.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169838",
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
