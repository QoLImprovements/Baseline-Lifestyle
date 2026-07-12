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
  "id": "usda-sr-legacy-168529",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Cowpeas, leafy tips, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 2.8,
    "energy_kcal": 92.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 1.09,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 351.0,
    "protein_g": 4.67,
    "salt_g": 0.605,
    "sat_fat_g": 0.026,
    "sodium_mg": 242.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168529",
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
