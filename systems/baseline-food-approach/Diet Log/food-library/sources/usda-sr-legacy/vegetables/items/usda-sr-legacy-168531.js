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
  "id": "usda-sr-legacy-168531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Drumstick leaves, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 151.0,
    "carbs_g": 11.2,
    "energy_kcal": 251.0,
    "fat_g": 0.93,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 2.32,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 344.0,
    "protein_g": 5.27,
    "salt_g": 0.6125,
    "sat_fat_g": 0.0,
    "sodium_mg": 245.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 351.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 108.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168531",
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
