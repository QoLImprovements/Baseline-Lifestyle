/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "4-spears-1-2-base",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "4-spears-1-2-base",
      "kind": "unit",
      "label": "4 spears (1/2\" base)"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Asparagus, cooked, boiled, drained",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 4.11,
    "energy_kcal": 22.0,
    "fat_g": 0.22,
    "fibre_g": 2.0,
    "folate_ug": 149.0,
    "iron_mg": 0.91,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 224.0,
    "protein_g": 2.4,
    "salt_g": 0.035,
    "sat_fat_g": 0.048,
    "sodium_mg": 14.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 50.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168390",
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
