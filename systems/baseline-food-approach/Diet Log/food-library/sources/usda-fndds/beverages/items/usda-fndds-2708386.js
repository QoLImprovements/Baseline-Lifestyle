/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup-dry-yields",
  "description": "Oatmeal",
  "id": "usda-fndds-2708386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 485.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Oatmeal, regular or quick, made with non-dairy milk, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 14.2,
    "energy_kcal": 107.0,
    "fat_g": 4.21,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.98,
    "magnesium_mg": 33.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 99.0,
    "potassium_mg": 109.0,
    "protein_g": 3.31,
    "salt_g": 0.3175,
    "sat_fat_g": 1.01,
    "sodium_mg": 127.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.27,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708386",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "beverages",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
