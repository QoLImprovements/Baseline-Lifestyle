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
  "id": "usda-sr-legacy-170462",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "can-15-oz-303-x-406",
      "kind": "unit",
      "label": "can, 15 oz (303 x 406)"
    }
  ],
  "name": "Tomato products, canned, sauce, with onions, green peppers, and celery",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 8.77,
    "energy_kcal": 171.0,
    "fat_g": 0.74,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.76,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 398.0,
    "protein_g": 0.94,
    "salt_g": 0.92,
    "sat_fat_g": 0.133,
    "sodium_mg": 368.0,
    "sugar_g": 7.36,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170462",
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
