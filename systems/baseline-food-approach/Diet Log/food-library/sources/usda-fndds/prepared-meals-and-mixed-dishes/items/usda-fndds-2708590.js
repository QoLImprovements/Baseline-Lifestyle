/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-triangular-piece",
      "kind": "unit",
      "label": "1 triangular piece"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-half-circle",
      "kind": "unit",
      "label": "1 half circle"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-full-circle",
      "kind": "unit",
      "label": "1 full circle"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Quesadilla, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 348.0,
    "carbs_g": 28.6,
    "energy_kcal": 316.0,
    "fat_g": 16.2,
    "fibre_g": 2.0,
    "folate_ug": 58.0,
    "iron_mg": 2.05,
    "magnesium_mg": 23.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 291.0,
    "potassium_mg": 107.0,
    "protein_g": 13.4,
    "salt_g": 1.69,
    "sat_fat_g": 8.45,
    "sodium_mg": 676.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708590",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
