/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709223",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup-mashed-or-pureed",
      "kind": "unit",
      "label": "1 cup, mashed or pureed"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    }
  ],
  "name": "Avocado, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.53,
    "energy_kcal": 160.0,
    "fat_g": 14.7,
    "fibre_g": 6.7,
    "folate_ug": 81.0,
    "iron_mg": 0.55,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 485.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 2.13,
    "sodium_mg": 7.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709223",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "fruit",
    "other-vegetables-and-combinations",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
