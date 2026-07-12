/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709839",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Asparagus, frozen, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.86,
    "energy_kcal": 40.0,
    "fat_g": 2.95,
    "fibre_g": 1.5,
    "folate_ug": 131.0,
    "iron_mg": 0.55,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 167.0,
    "protein_g": 2.86,
    "salt_g": 0.31,
    "sat_fat_g": 0.759,
    "sodium_mg": 124.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 23.6,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 79.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709839",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
