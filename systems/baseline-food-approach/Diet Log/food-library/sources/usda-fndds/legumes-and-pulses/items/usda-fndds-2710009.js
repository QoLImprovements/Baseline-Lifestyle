/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2710009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bean salad, yellow and/or green string beans",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 13.0,
    "energy_kcal": 109.0,
    "fat_g": 5.0,
    "fibre_g": 3.4,
    "folate_ug": 54.0,
    "iron_mg": 1.32,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 210.0,
    "protein_g": 3.52,
    "salt_g": 0.665,
    "sat_fat_g": 0.712,
    "sodium_mg": 266.0,
    "sugar_g": 3.48,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 27.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710009",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
