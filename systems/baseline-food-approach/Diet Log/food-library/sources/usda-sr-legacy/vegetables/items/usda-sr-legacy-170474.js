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
  "id": "usda-sr-legacy-170474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vinespinach, (basella), raw",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 3.4,
    "energy_kcal": 79.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 140.0,
    "iron_mg": 1.2,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 510.0,
    "protein_g": 1.8,
    "salt_g": 0.06,
    "sat_fat_g": 0.0,
    "sodium_mg": 24.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 400.0,
    "vitamin_c_mg": 102.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170474",
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
