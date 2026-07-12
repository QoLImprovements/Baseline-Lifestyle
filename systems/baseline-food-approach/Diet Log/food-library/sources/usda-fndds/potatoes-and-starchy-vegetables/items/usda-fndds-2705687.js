/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pudding, tapioca, made from dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 21.7,
    "energy_kcal": 130.0,
    "fat_g": 3.88,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.11,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 92.0,
    "protein_g": 1.95,
    "salt_g": 0.3625,
    "sat_fat_g": 0.962,
    "sodium_mg": 145.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705687",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "pudding",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
