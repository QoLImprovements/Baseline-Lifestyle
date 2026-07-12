/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-garlic-knot",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-garlic-knot",
      "kind": "unit",
      "label": "1 garlic knot"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-small-stick",
      "kind": "unit",
      "label": "1 small stick"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-large-stick",
      "kind": "unit",
      "label": "1 large stick"
    }
  ],
  "name": "Breadsticks, soft, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 46.4,
    "energy_kcal": 313.0,
    "fat_g": 9.16,
    "fibre_g": 2.4,
    "folate_ug": 128.0,
    "iron_mg": 4.13,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 123.0,
    "potassium_mg": 126.0,
    "protein_g": 11.1,
    "salt_g": 1.2575,
    "sat_fat_g": 2.11,
    "sodium_mg": 503.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707694",
  "state": "Frozen",
  "subcategory": "Rolls and buns",
  "tags": [
    "frozen",
    "other-foods",
    "rolls-and-buns"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
