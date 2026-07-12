/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "can-15-oz-303-x-406",
      "kind": "unit",
      "label": "can, 15 oz (303 x 406)"
    }
  ],
  "name": "Tomato products, canned, sauce, with tomato tidbits",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 7.09,
    "energy_kcal": 134.0,
    "fat_g": 0.39,
    "fibre_g": 1.4,
    "folate_ug": 9.0,
    "iron_mg": 0.68,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 373.0,
    "protein_g": 1.32,
    "salt_g": 0.0375,
    "sat_fat_g": 0.055,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 21.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170463",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
