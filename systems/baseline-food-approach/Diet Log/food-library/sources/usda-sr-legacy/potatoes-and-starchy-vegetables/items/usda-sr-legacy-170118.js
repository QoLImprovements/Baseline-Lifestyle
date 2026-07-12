/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "10-strip",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, all types, salt not added in processing, frozen, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 28.7,
    "energy_kcal": 704.0,
    "fat_g": 5.22,
    "fibre_g": 2.6,
    "folate_ug": 28.0,
    "iron_mg": 0.74,
    "magnesium_mg": 26.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 97.0,
    "potassium_mg": 451.0,
    "protein_g": 2.66,
    "salt_g": 0.08,
    "sat_fat_g": 1.03,
    "sodium_mg": 32.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.3,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170118",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
