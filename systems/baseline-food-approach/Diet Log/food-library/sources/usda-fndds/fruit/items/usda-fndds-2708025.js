/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-fritter",
      "kind": "unit",
      "label": "1 fritter"
    }
  ],
  "name": "Fritter, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 37.3,
    "energy_kcal": 403.0,
    "fat_g": 25.6,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 2.02,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 99.0,
    "potassium_mg": 143.0,
    "protein_g": 6.3,
    "salt_g": 0.8025,
    "sat_fat_g": 5.29,
    "sodium_mg": 321.0,
    "sugar_g": 12.4,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.96,
    "vitamin_k_ug": 20.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708025",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
