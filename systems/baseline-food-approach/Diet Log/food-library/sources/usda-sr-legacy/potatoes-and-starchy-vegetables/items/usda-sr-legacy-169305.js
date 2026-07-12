/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "can-404-x-307",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "can-404-x-307",
      "kind": "unit",
      "label": "can (404 x 307)"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sweet potato, canned, mashed",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 23.2,
    "energy_kcal": 101.0,
    "fat_g": 0.2,
    "fibre_g": 1.7,
    "folate_ug": 11.0,
    "iron_mg": 1.33,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 210.0,
    "protein_g": 1.98,
    "salt_g": 0.1875,
    "sat_fat_g": 0.041,
    "sodium_mg": 75.0,
    "sugar_g": 5.45,
    "vitamin_a_ug": 435.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169305",
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
