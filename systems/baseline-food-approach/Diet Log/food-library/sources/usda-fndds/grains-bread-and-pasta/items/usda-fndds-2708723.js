/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-item-any-size",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Knish",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 31.9,
    "energy_kcal": 345.0,
    "fat_g": 19.7,
    "fibre_g": 1.1,
    "folate_ug": 58.0,
    "iron_mg": 2.55,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 130.0,
    "potassium_mg": 124.0,
    "protein_g": 10.5,
    "salt_g": 1.1125,
    "sat_fat_g": 4.51,
    "sodium_mg": 445.0,
    "sugar_g": 0.98,
    "vitamin_a_ug": 209.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708723",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
