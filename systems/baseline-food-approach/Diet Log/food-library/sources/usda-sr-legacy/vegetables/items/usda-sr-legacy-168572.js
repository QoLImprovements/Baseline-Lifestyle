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
  "id": "usda-sr-legacy-168572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cabbage, napa, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 2.23,
    "energy_kcal": 12.0,
    "fat_g": 0.17,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 0.74,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 87.0,
    "protein_g": 1.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168572",
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
