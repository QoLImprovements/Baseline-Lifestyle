/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-spear",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709834",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Asparagus, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.16,
    "energy_kcal": 21.0,
    "fat_g": 0.13,
    "fibre_g": 2.3,
    "folate_ug": 47.0,
    "iron_mg": 2.29,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 217.0,
    "protein_g": 2.36,
    "salt_g": 0.3175,
    "sat_fat_g": 0.043,
    "sodium_mg": 127.0,
    "sugar_g": 2.02,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 44.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709834",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
