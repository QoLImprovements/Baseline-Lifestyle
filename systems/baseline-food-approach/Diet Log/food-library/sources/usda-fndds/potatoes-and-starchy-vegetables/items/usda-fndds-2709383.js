/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-small",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 400.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, baked, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 21.4,
    "energy_kcal": 93.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 389.0,
    "protein_g": 1.95,
    "salt_g": 0.4525,
    "sat_fat_g": 0.026,
    "sodium_mg": 181.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.7,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709383",
  "state": "Baked",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
