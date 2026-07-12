/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dried fruits",
  "id": "usda-fndds-2709206",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Papaya, dried",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 75.4,
    "energy_kcal": 302.0,
    "fat_g": 0.84,
    "fibre_g": 4.5,
    "folate_ug": 49.0,
    "iron_mg": 0.69,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 484.0,
    "protein_g": 1.25,
    "salt_g": 0.055,
    "sat_fat_g": 0.215,
    "sodium_mg": 22.0,
    "sugar_g": 67.6,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 32.4,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709206",
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
