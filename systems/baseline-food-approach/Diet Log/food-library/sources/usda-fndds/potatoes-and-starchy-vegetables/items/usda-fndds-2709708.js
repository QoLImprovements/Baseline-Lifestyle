/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sweet potato, casserole or mashed",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 17.2,
    "energy_kcal": 99.0,
    "fat_g": 2.56,
    "fibre_g": 2.4,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 17.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 49.0,
    "potassium_mg": 420.0,
    "protein_g": 1.89,
    "salt_g": 0.33,
    "sat_fat_g": 1.38,
    "sodium_mg": 132.0,
    "sugar_g": 8.05,
    "vitamin_a_ug": 565.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709708",
  "state": "Mashed",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "mashed",
    "other-red-and-orange-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
