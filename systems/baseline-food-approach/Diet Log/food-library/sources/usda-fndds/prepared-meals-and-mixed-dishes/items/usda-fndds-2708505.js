/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chilaquiles",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 14.9,
    "energy_kcal": 195.0,
    "fat_g": 10.7,
    "fibre_g": 2.1,
    "folate_ug": 23.0,
    "iron_mg": 0.92,
    "magnesium_mg": 33.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 254.0,
    "potassium_mg": 164.0,
    "protein_g": 10.6,
    "salt_g": 0.915,
    "sat_fat_g": 5.07,
    "sodium_mg": 366.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708505",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
