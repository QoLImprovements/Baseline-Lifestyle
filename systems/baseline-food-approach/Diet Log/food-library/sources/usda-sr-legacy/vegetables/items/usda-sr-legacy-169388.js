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
  "id": "usda-sr-legacy-169388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "pad",
      "kind": "unit",
      "label": "pad"
    }
  ],
  "name": "Nopales, cooked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 3.28,
    "energy_kcal": 15.0,
    "fat_g": 0.05,
    "fibre_g": 2.0,
    "folate_ug": 3.0,
    "iron_mg": 0.5,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 195.0,
    "protein_g": 1.35,
    "salt_g": 0.05,
    "sat_fat_g": 0.006,
    "sodium_mg": 20.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169388",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
