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
  "id": "usda-sr-legacy-168486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Taro, cooked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 34.6,
    "energy_kcal": 142.0,
    "fat_g": 0.11,
    "fibre_g": 5.1,
    "folate_ug": 19.0,
    "iron_mg": 0.72,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 484.0,
    "protein_g": 0.52,
    "salt_g": 0.0375,
    "sat_fat_g": 0.023,
    "sodium_mg": 15.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 2.93,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168486",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
