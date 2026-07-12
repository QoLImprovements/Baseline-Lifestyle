/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170061",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Turnip greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 7.13,
    "energy_kcal": 32.0,
    "fat_g": 0.3,
    "fibre_g": 3.2,
    "folate_ug": 194.0,
    "iron_mg": 1.1,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 296.0,
    "protein_g": 1.5,
    "salt_g": 0.1,
    "sat_fat_g": 0.07,
    "sodium_mg": 40.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 579.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 2.86,
    "vitamin_k_ug": 251.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170061",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
