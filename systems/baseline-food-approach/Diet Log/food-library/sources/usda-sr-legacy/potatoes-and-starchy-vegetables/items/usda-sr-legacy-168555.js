/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, home-prepared, whole milk and butter added",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 16.8,
    "energy_kcal": 113.0,
    "fat_g": 4.22,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.26,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 284.0,
    "protein_g": 1.86,
    "salt_g": 0.7925,
    "sat_fat_g": 2.61,
    "sodium_mg": 317.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168555",
  "state": "Mashed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "mashed",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
