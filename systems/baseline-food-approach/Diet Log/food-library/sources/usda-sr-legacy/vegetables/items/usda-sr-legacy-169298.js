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
  "id": "usda-sr-legacy-169298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, spaghetti, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.91,
    "energy_kcal": 130.0,
    "fat_g": 0.57,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.31,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 108.0,
    "protein_g": 0.64,
    "salt_g": 0.0425,
    "sat_fat_g": 0.117,
    "sodium_mg": 17.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169298",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
