/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 500.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Eggplant, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.88,
    "energy_kcal": 25.0,
    "fat_g": 0.18,
    "fibre_g": 3.0,
    "folate_ug": 22.0,
    "iron_mg": 0.23,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 229.0,
    "protein_g": 0.98,
    "salt_g": 0.005,
    "sat_fat_g": 0.034,
    "sodium_mg": 2.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709785",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
