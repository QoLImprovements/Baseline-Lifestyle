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
  "id": "usda-sr-legacy-170406",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Collards, raw",
  "nutritionPerBasis": {
    "calcium_mg": 232.0,
    "carbs_g": 5.42,
    "energy_kcal": 32.0,
    "fat_g": 0.61,
    "fibre_g": 4.0,
    "folate_ug": 129.0,
    "iron_mg": 0.47,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 213.0,
    "protein_g": 3.02,
    "salt_g": 0.0425,
    "sat_fat_g": 0.055,
    "sodium_mg": 17.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 251.0,
    "vitamin_c_mg": 35.3,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 437.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170406",
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
