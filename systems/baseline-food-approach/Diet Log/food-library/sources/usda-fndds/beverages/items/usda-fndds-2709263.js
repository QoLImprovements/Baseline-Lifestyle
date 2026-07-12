/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-chunk",
  "description": "Pineapple",
  "id": "usda-fndds-2709263",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-chunk",
      "kind": "unit",
      "label": "1 chunk"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-slice-ring",
      "kind": "unit",
      "label": "1 slice/ring"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    }
  ],
  "name": "Pineapple, canned, juice pack",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 12.2,
    "energy_kcal": 48.0,
    "fat_g": 0.12,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.46,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 166.0,
    "protein_g": 0.44,
    "salt_g": 0.01,
    "sat_fat_g": 0.012,
    "sodium_mg": 4.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709263",
  "state": "Canned",
  "subcategory": "Pineapple",
  "tags": [
    "beverages",
    "canned",
    "pineapple"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
