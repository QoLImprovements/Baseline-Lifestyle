/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Spinach",
  "id": "usda-fndds-2709628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach, creamed",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 6.11,
    "energy_kcal": 90.0,
    "fat_g": 6.09,
    "fibre_g": 1.2,
    "folate_ug": 60.0,
    "iron_mg": 0.76,
    "magnesium_mg": 67.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 39.0,
    "potassium_mg": 340.0,
    "protein_g": 2.39,
    "salt_g": 1.125,
    "sat_fat_g": 3.3,
    "sodium_mg": 450.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 257.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 341.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709628",
  "state": "Unspecified",
  "subcategory": "Spinach",
  "tags": [
    "spinach",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
