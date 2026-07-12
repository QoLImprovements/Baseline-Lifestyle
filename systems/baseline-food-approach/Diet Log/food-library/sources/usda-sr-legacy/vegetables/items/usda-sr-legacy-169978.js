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
  "id": "usda-sr-legacy-169978",
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
      "gramsPerUnit": 22.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Cabbage, red, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.94,
    "energy_kcal": 122.0,
    "fat_g": 0.09,
    "fibre_g": 2.6,
    "folate_ug": 24.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 262.0,
    "protein_g": 1.51,
    "salt_g": 0.07,
    "sat_fat_g": 0.011,
    "sodium_mg": 28.0,
    "sugar_g": 3.32,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 34.4,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 47.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169978",
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
