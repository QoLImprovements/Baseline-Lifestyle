/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "piece",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomatoes, sun-dried",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 55.8,
    "energy_kcal": 1080.0,
    "fat_g": 2.97,
    "fibre_g": 12.3,
    "folate_ug": 68.0,
    "iron_mg": 9.09,
    "magnesium_mg": 194.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 356.0,
    "potassium_mg": 3430.0,
    "protein_g": 14.1,
    "salt_g": 0.2675,
    "sat_fat_g": 0.426,
    "sodium_mg": 107.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 39.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168567",
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
