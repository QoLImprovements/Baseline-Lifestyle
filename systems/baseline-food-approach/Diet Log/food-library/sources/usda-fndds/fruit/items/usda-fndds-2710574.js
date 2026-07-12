/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fl-oz",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pina Colada, nonalcoholic",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 25.6,
    "energy_kcal": 128.0,
    "fat_g": 2.79,
    "fibre_g": 0.2,
    "folate_ug": 16.0,
    "iron_mg": 0.26,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 116.0,
    "protein_g": 0.47,
    "salt_g": 0.02,
    "sat_fat_g": 2.54,
    "sodium_mg": 8.0,
    "sugar_g": 23.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710574",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "fruit",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
