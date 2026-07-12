/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 5.06,
    "energy_kcal": 118.0,
    "fat_g": 0.35,
    "fibre_g": 2.3,
    "folate_ug": 71.0,
    "iron_mg": 0.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 325.0,
    "protein_g": 2.98,
    "salt_g": 0.0675,
    "sat_fat_g": 0.054,
    "sodium_mg": 27.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 16000.0,
    "vitamin_c_mg": 93.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169329",
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
