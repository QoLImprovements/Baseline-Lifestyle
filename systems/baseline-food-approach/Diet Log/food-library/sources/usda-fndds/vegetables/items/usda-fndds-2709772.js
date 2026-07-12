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
  "id": "usda-fndds-2709772",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-sprout",
      "kind": "unit",
      "label": "1 sprout"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Brussels sprouts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 8.95,
    "energy_kcal": 43.0,
    "fat_g": 0.3,
    "fibre_g": 3.8,
    "folate_ug": 61.0,
    "iron_mg": 1.4,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 389.0,
    "protein_g": 3.38,
    "salt_g": 0.0625,
    "sat_fat_g": 0.062,
    "sodium_mg": 25.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 85.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 177.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709772",
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
