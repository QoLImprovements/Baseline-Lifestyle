/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "package-6-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
    }
  ],
  "name": "Potatoes, hash brown, frozen, with butter sauce, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 18.3,
    "energy_kcal": 565.0,
    "fat_g": 6.66,
    "fibre_g": 2.9,
    "folate_ug": 12.0,
    "iron_mg": 0.75,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 248.0,
    "protein_g": 1.87,
    "salt_g": 0.1925,
    "sat_fat_g": 2.56,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170045",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
