/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Broccoli",
  "id": "usda-fndds-2709652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    }
  ],
  "name": "Broccoli, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 5.18,
    "energy_kcal": 53.0,
    "fat_g": 3.02,
    "fibre_g": 2.9,
    "folate_ug": 54.0,
    "iron_mg": 0.6,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 137.0,
    "protein_g": 3.0,
    "salt_g": 0.3075,
    "sat_fat_g": 0.406,
    "sodium_mg": 123.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 38.8,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 88.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709652",
  "state": "Frozen",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "frozen",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
