/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Strawberries",
  "id": "usda-fndds-2709283",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Strawberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.96,
    "energy_kcal": 36.0,
    "fat_g": 0.22,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.26,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 161.0,
    "protein_g": 0.64,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 4.86,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 59.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709283",
  "state": "Raw",
  "subcategory": "Strawberries",
  "tags": [
    "other-foods",
    "raw",
    "strawberries"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
