/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "medium",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 328.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Sweet potato, cooked, boiled, without skin",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.7,
    "energy_kcal": 76.0,
    "fat_g": 0.14,
    "fibre_g": 2.5,
    "folate_ug": 6.0,
    "iron_mg": 0.72,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 230.0,
    "protein_g": 1.37,
    "salt_g": 0.0675,
    "sat_fat_g": 0.031,
    "sodium_mg": 27.0,
    "sugar_g": 5.74,
    "vitamin_a_ug": 787.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168484",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
