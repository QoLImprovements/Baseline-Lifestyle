/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Carrots, raw, salad with apples",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 8.59,
    "energy_kcal": 181.0,
    "fat_g": 16.0,
    "fibre_g": 2.3,
    "folate_ug": 25.0,
    "iron_mg": 0.16,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 31.0,
    "potassium_mg": 198.0,
    "protein_g": 0.85,
    "salt_g": 0.4725,
    "sat_fat_g": 2.49,
    "sodium_mg": 189.0,
    "sugar_g": 4.47,
    "vitamin_a_ug": 532.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709662",
  "state": "Raw",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
