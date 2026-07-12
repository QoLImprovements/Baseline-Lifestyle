/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-5-5-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "package-5-5-oz",
      "kind": "unit",
      "label": "package (5.5 oz)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "0-16-package-5-5-oz",
      "kind": "unit",
      "label": "0.16 package (5.5 oz)"
    }
  ],
  "name": "Potatoes, au gratin, dry mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 311.0,
    "carbs_g": 74.3,
    "energy_kcal": 1310.0,
    "fat_g": 3.7,
    "fibre_g": 4.1,
    "folate_ug": 40.0,
    "iron_mg": 1.63,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 404.0,
    "potassium_mg": 990.0,
    "protein_g": 8.9,
    "salt_g": 5.25,
    "sat_fat_g": 2.32,
    "sodium_mg": 2100.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 15.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170447",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
