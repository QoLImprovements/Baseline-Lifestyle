/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Citrus fruits",
  "id": "usda-fndds-2709173",
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
      "gramsPerUnit": 8.0,
      "key": "1-section-slice",
      "kind": "unit",
      "label": "1 section/slice"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    }
  ],
  "name": "Orange, canned, juice pack",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 9.57,
    "energy_kcal": 37.0,
    "fat_g": 0.03,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 133.0,
    "protein_g": 0.62,
    "salt_g": 0.0125,
    "sat_fat_g": 0.003,
    "sodium_mg": 5.0,
    "sugar_g": 8.87,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 34.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709173",
  "state": "Canned",
  "subcategory": "Citrus fruits",
  "tags": [
    "beverages",
    "canned",
    "citrus-fruits"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
