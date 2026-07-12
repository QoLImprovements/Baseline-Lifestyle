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
  "id": "usda-fndds-2709835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    }
  ],
  "name": "Asparagus, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.91,
    "energy_kcal": 18.0,
    "fat_g": 0.42,
    "fibre_g": 1.6,
    "folate_ug": 135.0,
    "iron_mg": 0.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 171.0,
    "protein_g": 2.94,
    "salt_g": 0.2975,
    "sat_fat_g": 0.096,
    "sodium_mg": 119.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 24.3,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 79.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709835",
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
