/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can-15-oz-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "can-15-oz-303-x-406",
      "kind": "unit",
      "label": "can, 15 oz (303 x 406)"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Turnip greens, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 2.42,
    "energy_kcal": 59.0,
    "fat_g": 0.3,
    "fibre_g": 1.7,
    "folate_ug": 41.0,
    "iron_mg": 1.51,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 141.0,
    "protein_g": 1.36,
    "salt_g": 0.6925,
    "sat_fat_g": 0.07,
    "sodium_mg": 277.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 179.0,
    "vitamin_c_mg": 15.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170467",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
