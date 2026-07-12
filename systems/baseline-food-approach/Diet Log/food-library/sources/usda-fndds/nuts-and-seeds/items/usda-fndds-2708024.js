/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708024",
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
  "name": "Fritter, plain",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 27.5,
    "energy_kcal": 378.0,
    "fat_g": 26.9,
    "fibre_g": 0.9,
    "folate_ug": 44.0,
    "iron_mg": 2.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 101.0,
    "potassium_mg": 125.0,
    "protein_g": 6.56,
    "salt_g": 0.85,
    "sat_fat_g": 5.58,
    "sodium_mg": 340.0,
    "sugar_g": 2.06,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.17,
    "vitamin_k_ug": 21.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708024",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
