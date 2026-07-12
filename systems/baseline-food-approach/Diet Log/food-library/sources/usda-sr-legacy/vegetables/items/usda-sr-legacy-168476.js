/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, hubbard, baked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 10.8,
    "energy_kcal": 209.0,
    "fat_g": 0.62,
    "fibre_g": 4.9,
    "folate_ug": 16.0,
    "iron_mg": 0.47,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 358.0,
    "protein_g": 2.48,
    "salt_g": 0.02,
    "sat_fat_g": 0.128,
    "sodium_mg": 8.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 335.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168476",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
