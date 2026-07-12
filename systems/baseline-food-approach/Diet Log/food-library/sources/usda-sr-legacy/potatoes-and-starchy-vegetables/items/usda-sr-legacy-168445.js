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
  "id": "usda-sr-legacy-168445",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, steak fries, salt added in processing, frozen, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 27.0,
    "energy_kcal": 148.0,
    "fat_g": 3.76,
    "fibre_g": 2.6,
    "folate_ug": 31.0,
    "iron_mg": 0.64,
    "magnesium_mg": 23.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 90.0,
    "potassium_mg": 459.0,
    "protein_g": 2.57,
    "salt_g": 0.9325,
    "sat_fat_g": 0.737,
    "sodium_mg": 373.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168445",
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
