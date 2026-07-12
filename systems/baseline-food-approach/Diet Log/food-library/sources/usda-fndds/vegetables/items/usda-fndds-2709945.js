/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Okra, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 6.39,
    "energy_kcal": 29.0,
    "fat_g": 0.24,
    "fibre_g": 2.1,
    "folate_ug": 100.0,
    "iron_mg": 0.52,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 183.0,
    "protein_g": 1.62,
    "salt_g": 0.2975,
    "sat_fat_g": 0.063,
    "sodium_mg": 119.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 47.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709945",
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
