/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "10-strips",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169265",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-9-oz",
      "kind": "unit",
      "label": "package (9 oz)"
    }
  ],
  "name": "Potatoes, french fried, cottage-cut, salt not added in processing, frozen, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 24.0,
    "energy_kcal": 640.0,
    "fat_g": 5.78,
    "fibre_g": 3.0,
    "folate_ug": 15.0,
    "iron_mg": 1.05,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 338.0,
    "protein_g": 2.42,
    "salt_g": 0.08,
    "sat_fat_g": 2.74,
    "sodium_mg": 32.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169265",
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
