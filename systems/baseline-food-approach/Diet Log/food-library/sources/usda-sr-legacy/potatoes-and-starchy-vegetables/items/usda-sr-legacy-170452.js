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
  "id": "usda-sr-legacy-170452",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, shoestring, salt added in processing, frozen, oven-heated",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 31.7,
    "energy_kcal": 813.0,
    "fat_g": 6.76,
    "fibre_g": 2.8,
    "folate_ug": 33.0,
    "iron_mg": 0.8,
    "magnesium_mg": 25.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 112.0,
    "potassium_mg": 505.0,
    "protein_g": 2.9,
    "salt_g": 1.0,
    "sat_fat_g": 1.27,
    "sodium_mg": 400.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.2,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170452",
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
