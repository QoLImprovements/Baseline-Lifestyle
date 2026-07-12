/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-surface-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1188.0,
      "key": "1-pizza-12-dia",
      "kind": "unit",
      "label": "1 pizza (12\" dia)"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Dessert pizza",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 32.4,
    "energy_kcal": 204.0,
    "fat_g": 7.53,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 0.88,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 47.0,
    "potassium_mg": 120.0,
    "protein_g": 1.84,
    "salt_g": 0.325,
    "sat_fat_g": 1.84,
    "sodium_mg": 130.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 23.9,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708008",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
