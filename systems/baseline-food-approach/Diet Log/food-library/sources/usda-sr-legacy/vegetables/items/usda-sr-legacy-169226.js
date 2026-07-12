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
  "id": "usda-sr-legacy-169226",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Dandelion greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 9.2,
    "energy_kcal": 45.0,
    "fat_g": 0.7,
    "fibre_g": 3.5,
    "folate_ug": 27.0,
    "iron_mg": 3.1,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 397.0,
    "protein_g": 2.7,
    "salt_g": 0.19,
    "sat_fat_g": 0.17,
    "sodium_mg": 76.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 508.0,
    "vitamin_c_mg": 35.0,
    "vitamin_e_mg": 3.44,
    "vitamin_k_ug": 778.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169226",
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
