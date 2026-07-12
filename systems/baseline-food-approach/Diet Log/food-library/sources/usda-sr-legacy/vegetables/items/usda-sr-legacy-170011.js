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
  "id": "usda-sr-legacy-170011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, edible-podded, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.05,
    "energy_kcal": 176.0,
    "fat_g": 0.23,
    "fibre_g": 2.8,
    "folate_ug": 29.0,
    "iron_mg": 1.97,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 240.0,
    "protein_g": 3.27,
    "salt_g": 0.01,
    "sat_fat_g": 0.044,
    "sodium_mg": 4.0,
    "sugar_g": 3.99,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 47.9,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170011",
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
