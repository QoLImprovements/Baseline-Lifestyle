/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Broccoli",
  "id": "usda-fndds-2709649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Broccoli, frozen, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 5.18,
    "energy_kcal": 50.0,
    "fat_g": 2.66,
    "fibre_g": 2.9,
    "folate_ug": 54.0,
    "iron_mg": 0.59,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 138.0,
    "protein_g": 3.01,
    "salt_g": 0.33,
    "sat_fat_g": 0.684,
    "sodium_mg": 132.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 38.8,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 87.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709649",
  "state": "Frozen",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "frozen",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
