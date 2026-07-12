/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168469",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 1361.0,
      "key": "package-3-lb",
      "kind": "unit",
      "label": "package (3 lb)"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    }
  ],
  "name": "Squash, summer, zucchini, includes skin, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 3.58,
    "energy_kcal": 70.0,
    "fat_g": 0.13,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.51,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 218.0,
    "protein_g": 1.16,
    "salt_g": 0.005,
    "sat_fat_g": 0.027,
    "sodium_mg": 2.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168469",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
