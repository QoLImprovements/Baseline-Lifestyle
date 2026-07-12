/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "nlea-serving",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Carrots, baby, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 8.24,
    "energy_kcal": 35.0,
    "fat_g": 0.13,
    "fibre_g": 2.9,
    "folate_ug": 27.0,
    "iron_mg": 0.89,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 237.0,
    "protein_g": 0.64,
    "salt_g": 0.195,
    "sat_fat_g": 0.023,
    "sodium_mg": 78.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 690.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168568",
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
