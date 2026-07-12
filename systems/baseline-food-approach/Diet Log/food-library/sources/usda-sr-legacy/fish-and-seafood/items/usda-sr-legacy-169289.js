/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Squash, summer, scallop, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.84,
    "energy_kcal": 75.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 30.0,
    "iron_mg": 0.4,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 182.0,
    "protein_g": 1.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.041,
    "sodium_mg": 1.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169289",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fish-and-seafood",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
