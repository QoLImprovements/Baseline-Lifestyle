/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168421",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Kale, raw",
  "nutritionPerBasis": {
    "calcium_mg": 254.0,
    "carbs_g": 4.42,
    "energy_kcal": 148.0,
    "fat_g": 1.49,
    "fibre_g": 4.1,
    "folate_ug": 62.0,
    "iron_mg": 1.6,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 348.0,
    "protein_g": 2.92,
    "salt_g": 0.1325,
    "sat_fat_g": 0.178,
    "sodium_mg": 53.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 93.4,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 390.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168421",
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
