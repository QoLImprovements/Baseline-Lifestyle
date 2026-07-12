/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "leaf-12-1-4-long",
      "kind": "unit",
      "label": "leaf (12-1/4\" long)"
    }
  ],
  "name": "Sweet potato leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 8.82,
    "energy_kcal": 175.0,
    "fat_g": 0.51,
    "fibre_g": 5.3,
    "folate_ug": 1.0,
    "iron_mg": 0.97,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 508.0,
    "protein_g": 2.49,
    "salt_g": 0.015,
    "sat_fat_g": 0.111,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 189.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 302.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169303",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
