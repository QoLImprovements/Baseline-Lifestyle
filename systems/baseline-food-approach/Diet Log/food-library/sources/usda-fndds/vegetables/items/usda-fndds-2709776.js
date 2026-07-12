/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-pad",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-pad",
      "kind": "unit",
      "label": "1 pad"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cactus, raw",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 3.33,
    "energy_kcal": 16.0,
    "fat_g": 0.09,
    "fibre_g": 2.2,
    "folate_ug": 3.0,
    "iron_mg": 0.59,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 257.0,
    "protein_g": 1.32,
    "salt_g": 0.0525,
    "sat_fat_g": 0.016,
    "sodium_mg": 21.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709776",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
