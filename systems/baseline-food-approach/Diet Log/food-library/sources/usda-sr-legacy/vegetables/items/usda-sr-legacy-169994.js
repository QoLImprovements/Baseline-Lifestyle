/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tsp-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169994",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "tsp-chopped",
      "kind": "unit",
      "label": "tsp chopped"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    }
  ],
  "name": "Chives, raw",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 4.35,
    "energy_kcal": 126.0,
    "fat_g": 0.73,
    "fibre_g": 2.5,
    "folate_ug": 105.0,
    "iron_mg": 1.6,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 296.0,
    "protein_g": 3.27,
    "salt_g": 0.0075,
    "sat_fat_g": 0.146,
    "sodium_mg": 3.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 218.0,
    "vitamin_c_mg": 58.1,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 213.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169994",
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
