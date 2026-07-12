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
  "id": "usda-fndds-2708720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pierogi",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 29.6,
    "energy_kcal": 195.0,
    "fat_g": 6.14,
    "fibre_g": 0.9,
    "folate_ug": 64.0,
    "iron_mg": 1.26,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 107.0,
    "protein_g": 5.26,
    "salt_g": 1.185,
    "sat_fat_g": 1.32,
    "sodium_mg": 474.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708720",
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
