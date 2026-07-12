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
  "id": "usda-sr-legacy-169970",
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
      "gramsPerUnit": 907.0,
      "key": "package-2-lb",
      "kind": "unit",
      "label": "package (2 lb)"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    }
  ],
  "name": "Broccoli, frozen, spears, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 5.35,
    "energy_kcal": 121.0,
    "fat_g": 0.34,
    "fibre_g": 3.0,
    "folate_ug": 94.0,
    "iron_mg": 0.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 250.0,
    "protein_g": 3.06,
    "salt_g": 0.0425,
    "sat_fat_g": 0.052,
    "sodium_mg": 17.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 68.3,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 101.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169970",
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
