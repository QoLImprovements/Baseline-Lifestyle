/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "8-pods-3-long",
      "kind": "unit",
      "label": "8 pods (3\" long)"
    }
  ],
  "name": "Okra, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 4.51,
    "energy_kcal": 22.0,
    "fat_g": 0.21,
    "fibre_g": 2.5,
    "folate_ug": 46.0,
    "iron_mg": 0.28,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 135.0,
    "protein_g": 1.87,
    "salt_g": 0.015,
    "sat_fat_g": 0.045,
    "sodium_mg": 6.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 40.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169261",
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
