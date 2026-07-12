/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Peaches and nectarines",
  "id": "usda-fndds-2709252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    }
  ],
  "name": "Peach, canned, juice pack",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.3,
    "energy_kcal": 41.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 3.0,
    "iron_mg": 0.39,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 141.0,
    "protein_g": 0.45,
    "salt_g": 0.015,
    "sat_fat_g": 0.012,
    "sodium_mg": 6.0,
    "sugar_g": 8.89,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709252",
  "state": "Canned",
  "subcategory": "Peaches and nectarines",
  "tags": [
    "beverages",
    "canned",
    "peaches-and-nectarines"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
