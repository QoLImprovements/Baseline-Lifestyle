/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Onions",
  "id": "usda-fndds-2709794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    }
  ],
  "name": "Onions, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 7.34,
    "energy_kcal": 32.0,
    "fat_g": 0.19,
    "fibre_g": 2.6,
    "folate_ug": 64.0,
    "iron_mg": 1.48,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 276.0,
    "protein_g": 1.83,
    "salt_g": 0.04,
    "sat_fat_g": 0.032,
    "sodium_mg": 16.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 207.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709794",
  "state": "Raw",
  "subcategory": "Onions",
  "tags": [
    "onions",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
