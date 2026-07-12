/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Bitter melon, horseradish, jute, or radish leaves, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.47,
    "energy_kcal": 56.0,
    "fat_g": 2.74,
    "fibre_g": 1.8,
    "folate_ug": 85.0,
    "iron_mg": 0.99,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 583.0,
    "protein_g": 3.49,
    "salt_g": 0.335,
    "sat_fat_g": 0.697,
    "sodium_mg": 134.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 128.0,
    "vitamin_c_mg": 53.8,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 160.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709641",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "fruit",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
