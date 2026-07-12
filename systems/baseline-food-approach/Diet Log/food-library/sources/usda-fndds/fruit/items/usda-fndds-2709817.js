/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coleslaw, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 13.6,
    "energy_kcal": 113.0,
    "fat_g": 6.34,
    "fibre_g": 2.1,
    "folate_ug": 26.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 31.0,
    "potassium_mg": 182.0,
    "protein_g": 0.91,
    "salt_g": 0.555,
    "sat_fat_g": 0.982,
    "sodium_mg": 222.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 22.1,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 43.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709817",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
