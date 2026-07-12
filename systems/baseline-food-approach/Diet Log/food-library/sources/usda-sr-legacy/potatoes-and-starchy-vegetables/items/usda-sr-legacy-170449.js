/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-16-package-5-5-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "0-16-package-5-5-oz",
      "kind": "unit",
      "label": "0.16 package (5.5 oz)"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "package-5-5-oz",
      "kind": "unit",
      "label": "package (5.5 oz)"
    }
  ],
  "name": "Potatoes, scalloped, dry mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 73.9,
    "energy_kcal": 1500.0,
    "fat_g": 4.59,
    "fibre_g": 8.6,
    "folate_ug": 32.0,
    "iron_mg": 2.01,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 905.0,
    "protein_g": 7.77,
    "salt_g": 3.95,
    "sat_fat_g": 1.2,
    "sodium_mg": 1580.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 16.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170449",
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
