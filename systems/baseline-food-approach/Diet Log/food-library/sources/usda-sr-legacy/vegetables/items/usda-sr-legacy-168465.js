/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Squash, summer, crookneck and straightneck, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 3.79,
    "energy_kcal": 81.0,
    "fat_g": 0.39,
    "fibre_g": 1.1,
    "folate_ug": 23.0,
    "iron_mg": 0.37,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 177.0,
    "protein_g": 1.04,
    "salt_g": 0.0025,
    "sat_fat_g": 0.064,
    "sodium_mg": 1.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168465",
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
