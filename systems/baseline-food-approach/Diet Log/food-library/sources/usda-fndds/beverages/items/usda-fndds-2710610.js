/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can-or-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 can or bottle (12 fl oz)"
    }
  ],
  "name": "Beer, nonalcoholic",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 8.05,
    "energy_kcal": 37.0,
    "fat_g": 0.12,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.06,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 8.0,
    "protein_g": 0.21,
    "salt_g": 0.0325,
    "sat_fat_g": 0.024,
    "sodium_mg": 13.0,
    "sugar_g": 8.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710610",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "beverages",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
