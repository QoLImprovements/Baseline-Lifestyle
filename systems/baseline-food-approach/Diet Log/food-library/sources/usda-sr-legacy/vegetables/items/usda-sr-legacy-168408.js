/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cress, garden, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 3.8,
    "energy_kcal": 23.0,
    "fat_g": 0.6,
    "fibre_g": 0.7,
    "folate_ug": 37.0,
    "iron_mg": 0.8,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 353.0,
    "protein_g": 1.9,
    "salt_g": 0.02,
    "sat_fat_g": 0.02,
    "sodium_mg": 8.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 383.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168408",
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
