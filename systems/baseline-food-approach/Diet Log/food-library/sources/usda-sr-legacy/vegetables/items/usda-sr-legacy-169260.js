/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "8-pods-3-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "8-pods-3-long",
      "kind": "unit",
      "label": "8 pods (3\" long)"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Okra, raw",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 7.45,
    "energy_kcal": 138.0,
    "fat_g": 0.19,
    "fibre_g": 3.2,
    "folate_ug": 60.0,
    "iron_mg": 0.62,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 299.0,
    "protein_g": 1.93,
    "salt_g": 0.0175,
    "sat_fat_g": 0.026,
    "sodium_mg": 7.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 31.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169260",
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
