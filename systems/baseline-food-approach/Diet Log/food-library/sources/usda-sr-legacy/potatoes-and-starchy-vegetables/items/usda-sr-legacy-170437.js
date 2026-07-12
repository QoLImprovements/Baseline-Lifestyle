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
  "id": "usda-sr-legacy-170437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, crinkle or regular cut, salt added in processing, frozen, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 27.5,
    "energy_kcal": 672.0,
    "fat_g": 5.13,
    "fibre_g": 2.3,
    "folate_ug": 22.0,
    "iron_mg": 0.75,
    "magnesium_mg": 28.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 97.0,
    "potassium_mg": 471.0,
    "protein_g": 2.51,
    "salt_g": 0.9775,
    "sat_fat_g": 1.08,
    "sodium_mg": 391.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.8,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170437",
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
