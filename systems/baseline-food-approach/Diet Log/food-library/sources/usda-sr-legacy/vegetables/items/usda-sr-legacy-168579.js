/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "pepper",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    }
  ],
  "name": "Peppers, pasilla, dried",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 51.1,
    "energy_kcal": 1440.0,
    "fat_g": 15.8,
    "fibre_g": 26.8,
    "folate_ug": 170.0,
    "iron_mg": 9.83,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 267.0,
    "potassium_mg": 2220.0,
    "protein_g": 12.4,
    "salt_g": 0.2225,
    "sat_fat_g": 0.0,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1790.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168579",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
