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
  "id": "usda-sr-legacy-170141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Turnip greens and turnips, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 4.74,
    "energy_kcal": 144.0,
    "fat_g": 0.38,
    "fibre_g": 3.1,
    "folate_ug": 33.0,
    "iron_mg": 1.75,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 216.0,
    "protein_g": 2.99,
    "salt_g": 0.6375,
    "sat_fat_g": 0.085,
    "sodium_mg": 255.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 431.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 415.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170141",
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
