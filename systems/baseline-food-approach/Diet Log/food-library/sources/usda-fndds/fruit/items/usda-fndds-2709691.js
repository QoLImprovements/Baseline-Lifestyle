/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pumpkin, canned, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.86,
    "energy_kcal": 56.0,
    "fat_g": 2.82,
    "fibre_g": 2.8,
    "folate_ug": 11.0,
    "iron_mg": 1.35,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 200.0,
    "protein_g": 1.08,
    "salt_g": 0.0325,
    "sat_fat_g": 0.81,
    "sodium_mg": 13.0,
    "sugar_g": 3.21,
    "vitamin_a_ug": 767.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 17.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709691",
  "state": "Canned",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "canned",
    "fruit",
    "other-red-and-orange-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
