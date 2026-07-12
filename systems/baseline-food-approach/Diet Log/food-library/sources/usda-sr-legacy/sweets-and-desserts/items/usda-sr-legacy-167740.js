/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package",
  "description": "Sweets",
  "id": "usda-sr-legacy-167740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Puddings, chocolate flavor, low calorie, regular, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 74.4,
    "energy_kcal": 1530.0,
    "fat_g": 3.0,
    "fibre_g": 10.1,
    "folate_ug": 0.0,
    "iron_mg": 3.87,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 570.0,
    "protein_g": 10.1,
    "salt_g": 8.325,
    "sat_fat_g": 1.58,
    "sodium_mg": 3330.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167740",
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
