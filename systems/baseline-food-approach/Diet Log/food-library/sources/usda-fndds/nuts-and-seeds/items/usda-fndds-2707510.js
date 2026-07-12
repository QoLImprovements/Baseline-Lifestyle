/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-package",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mixed nuts, without peanuts, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 22.2,
    "energy_kcal": 625.0,
    "fat_g": 56.0,
    "fibre_g": 7.0,
    "folate_ug": 60.0,
    "iron_mg": 4.11,
    "magnesium_mg": 229.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 444.0,
    "potassium_mg": 615.0,
    "protein_g": 16.4,
    "salt_g": 0.015,
    "sat_fat_g": 7.23,
    "sodium_mg": 6.0,
    "sugar_g": 4.52,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 9.96,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707510",
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
