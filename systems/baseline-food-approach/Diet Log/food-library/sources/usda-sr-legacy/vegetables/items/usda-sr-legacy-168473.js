/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-4-lb",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1814.0,
      "key": "package-4-lb",
      "kind": "unit",
      "label": "package (4 lb)"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "package-12-oz",
      "kind": "unit",
      "label": "package (12 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "0-33-package-12-oz",
      "kind": "unit",
      "label": "0.33 package (12 oz)"
    }
  ],
  "name": "Squash, winter, butternut, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 14.4,
    "energy_kcal": 57.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 24.0,
    "iron_mg": 0.88,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 212.0,
    "protein_g": 1.76,
    "salt_g": 0.005,
    "sat_fat_g": 0.021,
    "sodium_mg": 2.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 240.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168473",
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
