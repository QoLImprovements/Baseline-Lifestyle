/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Corn, sweet, white, frozen, kernels cut off cob, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 19.6,
    "energy_kcal": 80.0,
    "fat_g": 0.43,
    "fibre_g": 2.4,
    "folate_ug": 31.0,
    "iron_mg": 0.35,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 147.0,
    "protein_g": 2.75,
    "salt_g": 0.0125,
    "sat_fat_g": 0.066,
    "sodium_mg": 5.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168545",
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
