/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169308",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Taro, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 26.5,
    "energy_kcal": 469.0,
    "fat_g": 0.2,
    "fibre_g": 4.1,
    "folate_ug": 22.0,
    "iron_mg": 0.55,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 591.0,
    "protein_g": 1.5,
    "salt_g": 0.0275,
    "sat_fat_g": 0.041,
    "sodium_mg": 11.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169308",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
