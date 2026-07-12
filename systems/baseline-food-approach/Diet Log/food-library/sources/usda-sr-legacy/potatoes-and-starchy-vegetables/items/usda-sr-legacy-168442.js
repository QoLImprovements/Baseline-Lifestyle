/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-9-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-9-oz",
      "kind": "unit",
      "label": "package (9 oz)"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, all types, salt added in processing, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 24.8,
    "energy_kcal": 147.0,
    "fat_g": 4.66,
    "fibre_g": 1.9,
    "folate_ug": 35.0,
    "iron_mg": 0.62,
    "magnesium_mg": 21.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 83.0,
    "potassium_mg": 408.0,
    "protein_g": 2.24,
    "salt_g": 0.83,
    "sat_fat_g": 1.0,
    "sodium_mg": 332.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.3,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168442",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
