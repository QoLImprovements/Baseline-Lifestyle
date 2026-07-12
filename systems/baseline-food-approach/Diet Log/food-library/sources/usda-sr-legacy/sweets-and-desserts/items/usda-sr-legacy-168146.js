/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-4-servings",
  "description": "Sweets",
  "id": "usda-sr-legacy-168146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "package-4-servings",
      "kind": "unit",
      "label": "package 4 servings"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Puddings, all flavors except chocolate, low calorie, instant, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 84.7,
    "energy_kcal": 1460.0,
    "fat_g": 0.9,
    "fibre_g": 0.8,
    "folate_ug": 1.0,
    "iron_mg": 0.38,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2370.0,
    "potassium_mg": 30.0,
    "protein_g": 0.81,
    "salt_g": 9.375,
    "sat_fat_g": 0.099,
    "sodium_mg": 3750.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168146",
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
