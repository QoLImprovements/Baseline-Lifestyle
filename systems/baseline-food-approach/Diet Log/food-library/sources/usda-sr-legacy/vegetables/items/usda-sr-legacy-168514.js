/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-shredded",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-shredded",
      "kind": "unit",
      "label": "0.5 cup, shredded"
    },
    {
      "gramsPerUnit": 1262.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    }
  ],
  "name": "Cabbage, common, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 5.51,
    "energy_kcal": 97.0,
    "fat_g": 0.06,
    "fibre_g": 1.9,
    "folate_ug": 30.0,
    "iron_mg": 0.17,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 196.0,
    "protein_g": 1.27,
    "salt_g": 0.6375,
    "sat_fat_g": 0.0,
    "sodium_mg": 255.0,
    "sugar_g": 2.79,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 37.5,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168514",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
