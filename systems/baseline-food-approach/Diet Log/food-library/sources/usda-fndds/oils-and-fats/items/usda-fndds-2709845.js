/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Asparagus, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.39,
    "energy_kcal": 45.0,
    "fat_g": 3.54,
    "fibre_g": 1.6,
    "folate_ug": 89.0,
    "iron_mg": 1.78,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 167.0,
    "protein_g": 2.08,
    "salt_g": 0.6975,
    "sat_fat_g": 0.532,
    "sodium_mg": 279.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 16.1,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709845",
  "state": "Canned",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
