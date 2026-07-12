/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-kernels",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-kernels",
      "kind": "unit",
      "label": "cup kernels"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "ear-yields",
      "kind": "unit",
      "label": "ear, yields"
    }
  ],
  "name": "Corn, sweet, yellow, frozen, kernels on cob, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 22.3,
    "energy_kcal": 391.0,
    "fat_g": 0.74,
    "fibre_g": 2.8,
    "folate_ug": 31.0,
    "iron_mg": 0.61,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 251.0,
    "protein_g": 3.11,
    "salt_g": 0.6,
    "sat_fat_g": 0.114,
    "sodium_mg": 240.0,
    "sugar_g": 3.59,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169349",
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
