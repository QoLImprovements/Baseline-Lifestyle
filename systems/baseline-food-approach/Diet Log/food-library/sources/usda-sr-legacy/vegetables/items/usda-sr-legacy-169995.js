/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "stem-8-3-4-long",
      "kind": "unit",
      "label": "stem (8-3/4\" long)"
    }
  ],
  "name": "Chrysanthemum, garland, raw",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 3.02,
    "energy_kcal": 24.0,
    "fat_g": 0.56,
    "fibre_g": 3.0,
    "folate_ug": 177.0,
    "iron_mg": 2.29,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 567.0,
    "protein_g": 3.36,
    "salt_g": 0.295,
    "sat_fat_g": 0.0,
    "sodium_mg": 118.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 350.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169995",
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
