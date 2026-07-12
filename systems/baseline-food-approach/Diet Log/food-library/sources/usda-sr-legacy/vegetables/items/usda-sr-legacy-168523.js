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
  "id": "usda-sr-legacy-168523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Collards, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 5.65,
    "energy_kcal": 137.0,
    "fat_g": 0.72,
    "fibre_g": 4.0,
    "folate_ug": 16.0,
    "iron_mg": 1.13,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 117.0,
    "protein_g": 2.71,
    "salt_g": 0.63,
    "sat_fat_g": 0.047,
    "sodium_mg": 252.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 380.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 407.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168523",
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
