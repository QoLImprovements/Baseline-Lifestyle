/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-168143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "package-1-4-oz-box-4-servings",
      "kind": "unit",
      "label": "package 1.4 oz box, 4 servings"
    }
  ],
  "name": "Puddings, chocolate flavor, low calorie, instant, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 78.2,
    "energy_kcal": 356.0,
    "fat_g": 2.4,
    "fibre_g": 6.1,
    "folate_ug": 6.0,
    "iron_mg": 3.11,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1660.0,
    "potassium_mg": 1280.0,
    "protein_g": 5.3,
    "salt_g": 7.1,
    "sat_fat_g": 0.984,
    "sodium_mg": 2840.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168143",
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
