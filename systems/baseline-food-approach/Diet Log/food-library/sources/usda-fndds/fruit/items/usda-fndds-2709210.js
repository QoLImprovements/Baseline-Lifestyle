/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Dried fruits",
  "id": "usda-fndds-2709210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    }
  ],
  "name": "Pineapple, dried",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 84.1,
    "energy_kcal": 347.0,
    "fat_g": 0.71,
    "fibre_g": 2.4,
    "folate_ug": 24.0,
    "iron_mg": 0.16,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 365.0,
    "protein_g": 1.22,
    "salt_g": 0.0,
    "sat_fat_g": 0.024,
    "sodium_mg": 0.0,
    "sugar_g": 77.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 31.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709210",
  "state": "Dried",
  "subcategory": "Dried fruits",
  "tags": [
    "dried",
    "dried-fruits",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
