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
  "id": "usda-sr-legacy-168534",
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
  "name": "Lambsquarters, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 258.0,
    "carbs_g": 5.0,
    "energy_kcal": 32.0,
    "fat_g": 0.7,
    "fibre_g": 2.1,
    "folate_ug": 14.0,
    "iron_mg": 0.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 288.0,
    "protein_g": 3.2,
    "salt_g": 0.6625,
    "sat_fat_g": 0.052,
    "sodium_mg": 265.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 391.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 494.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168534",
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
