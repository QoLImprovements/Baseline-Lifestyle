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
  "id": "usda-fndds-2709645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    }
  ],
  "name": "Broccoli, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 6.51,
    "energy_kcal": 41.0,
    "fat_g": 0.35,
    "fibre_g": 2.5,
    "folate_ug": 57.0,
    "iron_mg": 0.72,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 315.0,
    "protein_g": 2.67,
    "salt_g": 0.395,
    "sat_fat_g": 0.041,
    "sodium_mg": 158.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 80.6,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709645",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
