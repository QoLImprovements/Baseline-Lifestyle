/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "New zealand spinach, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 2.13,
    "energy_kcal": 51.0,
    "fat_g": 0.17,
    "fibre_g": 1.4,
    "folate_ug": 8.0,
    "iron_mg": 0.66,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 102.0,
    "protein_g": 1.3,
    "salt_g": 0.8575,
    "sat_fat_g": 0.027,
    "sodium_mg": 343.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 3620.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 292.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170506",
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
