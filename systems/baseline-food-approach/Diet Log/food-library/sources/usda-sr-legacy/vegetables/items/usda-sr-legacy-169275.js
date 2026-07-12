/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 431.0,
      "key": "squash",
      "kind": "unit",
      "label": "squash"
    }
  ],
  "name": "Purslane, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 3.55,
    "energy_kcal": 75.0,
    "fat_g": 0.19,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.77,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 488.0,
    "protein_g": 1.49,
    "salt_g": 0.11,
    "sat_fat_g": 0.0,
    "sodium_mg": 44.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169275",
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
