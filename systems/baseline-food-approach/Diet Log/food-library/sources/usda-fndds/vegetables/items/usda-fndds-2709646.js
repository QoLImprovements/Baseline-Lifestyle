/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Broccoli",
  "id": "usda-fndds-2709646",
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
      "gramsPerUnit": 10.0,
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
    }
  ],
  "name": "Broccoli, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 5.33,
    "energy_kcal": 28.0,
    "fat_g": 0.12,
    "fibre_g": 3.0,
    "folate_ug": 56.0,
    "iron_mg": 0.61,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 142.0,
    "protein_g": 3.09,
    "salt_g": 0.3175,
    "sat_fat_g": 0.018,
    "sodium_mg": 127.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 87.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709646",
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
