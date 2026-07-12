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
  "id": "usda-sr-legacy-169263",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Okra, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 6.41,
    "energy_kcal": 29.0,
    "fat_g": 0.24,
    "fibre_g": 2.1,
    "folate_ug": 100.0,
    "iron_mg": 0.52,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 184.0,
    "protein_g": 1.63,
    "salt_g": 0.0075,
    "sat_fat_g": 0.063,
    "sodium_mg": 3.0,
    "sugar_g": 2.87,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 47.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169263",
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
