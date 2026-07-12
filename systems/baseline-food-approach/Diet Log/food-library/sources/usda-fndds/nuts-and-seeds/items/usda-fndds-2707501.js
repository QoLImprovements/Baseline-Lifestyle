/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Coconut, packaged",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 51.8,
    "energy_kcal": 456.0,
    "fat_g": 28.0,
    "fibre_g": 9.9,
    "folate_ug": 3.0,
    "iron_mg": 1.51,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 361.0,
    "protein_g": 3.13,
    "salt_g": 0.7125,
    "sat_fat_g": 26.4,
    "sodium_mg": 285.0,
    "sugar_g": 36.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707501",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
