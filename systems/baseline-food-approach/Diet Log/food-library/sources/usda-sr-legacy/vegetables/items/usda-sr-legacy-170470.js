/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-3-lb",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Turnip greens and turnips, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 3.39,
    "energy_kcal": 90.0,
    "fat_g": 0.19,
    "fibre_g": 2.4,
    "folate_ug": 41.0,
    "iron_mg": 1.63,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 82.0,
    "protein_g": 2.46,
    "salt_g": 0.045,
    "sat_fat_g": 0.032,
    "sodium_mg": 18.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 305.0,
    "vitamin_c_mg": 25.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170470",
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
