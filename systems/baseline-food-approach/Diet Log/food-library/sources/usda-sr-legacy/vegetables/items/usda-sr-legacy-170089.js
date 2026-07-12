/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "recipe-yield",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170089",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 604.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomatoes, red, ripe, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.0,
    "energy_kcal": 331.0,
    "fat_g": 2.68,
    "fibre_g": 1.7,
    "folate_ug": 11.0,
    "iron_mg": 1.06,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 247.0,
    "protein_g": 1.96,
    "salt_g": 1.1375,
    "sat_fat_g": 0.521,
    "sodium_mg": 455.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170089",
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
