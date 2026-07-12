/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-snack-size-container",
  "description": "Citrus fruits",
  "id": "usda-fndds-2709172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-section-slice",
      "kind": "unit",
      "label": "1 section/slice"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Orange, canned, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 11.8,
    "energy_kcal": 46.0,
    "fat_g": 0.04,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.26,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 130.0,
    "protein_g": 0.6,
    "salt_g": 0.0125,
    "sat_fat_g": 0.003,
    "sodium_mg": 5.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 33.3,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709172",
  "state": "Canned",
  "subcategory": "Citrus fruits",
  "tags": [
    "canned",
    "citrus-fruits",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
